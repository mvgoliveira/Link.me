import { createContext, ReactNode, useEffect, useState } from "react";
import { jwtVerify } from "jose";
import Cookies from 'js-cookie';

import { api } from '../services/api'

type UserType = {
    username: string;
    image_url?: string | unknown;
    instagram_url?: string | unknown;
    facebook_url?: string | unknown;
    linkedin_url?: string | unknown;
}

type AuthContextProviderPropsType = {
    children: ReactNode;
}

type AuthContextType = {
    user: UserType | null;
    error: string | null;
    signIn: (email: string, password: string) => void;
    handleSetError: (message: string) => void;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderPropsType) {
    const [user, setUser] = useState<UserType | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const token = Cookies.get('@link.me:token');

        async function getTokenInfos(token: string) {
            const secret = new TextEncoder().encode(import.meta.env.VITE_TOKEN_SECRET);
            const verify = await jwtVerify(token, secret);
            
            if (
                typeof verify.payload.username === "string" 
                && typeof verify.payload.email === "string"
            ) {
                setUser({
                    username: verify.payload.username,
                    image_url: verify.payload.image_url,
                    instagram_url: verify.payload.instagram_url,
                    facebook_url: verify.payload.facebook_url,
                    linkedin_url: verify.payload.linkedin_url
                });

                api.defaults.headers.Authorization = `Bearer ${token}`;
            }
        }
        
        if (token) {
            getTokenInfos(token);
        } else {
            setUser({ username: "" });
        }
    }, []);

    function handleSetError(message: string | null) {
        setError(message);    
    }

    async function signIn(email: string, password: string) {
        try {
            const { data: token } = await api.post('/login', {email, password});

            const secret = new TextEncoder().encode(import.meta.env.VITE_TOKEN_SECRET);
            const verify = await jwtVerify(token, secret);
                
            Cookies.set('@link.me:token', token, {expires: 7});
            api.defaults.headers.Authorization = `Bearer ${token}`;
            
            if (
                typeof verify.payload.username === "string" 
                && typeof verify.payload.email === "string"
            ) {
                setUser({
                    username: verify.payload.username,
                    image_url: verify.payload.image_url,
                    instagram_url: verify.payload.instagram_url,
                    facebook_url: verify.payload.facebook_url,
                    linkedin_url: verify.payload.linkedin_url
                });
            }

            setError(null);
        } catch (error: any) {
            setError(error.response.data.message);
        }
    }

    async function signOut() {
        Cookies.remove('@link.me:token');
        api.defaults.headers.Authorization = null;
        setUser({ username: "" });
    }

    return (
        <AuthContext.Provider value={{ user, signIn, error, handleSetError, signOut }}>
            { props.children }
        </AuthContext.Provider>
    )
}