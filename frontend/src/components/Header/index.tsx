import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type propsType = {
	username: string | undefined;
}

function Header({username}: propsType) {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const [imageUrl, setImageUrl] = useState<string>("");
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

    async function handleSignOut() {
        setIsProfileMenuOpen(true);
        signOut();
    }

    useEffect(() => {
        async function getUserImageUrl() {
            const {data} = await api.get(`/user/${username}`);
            setImageUrl(data.image_url);
        }
        
        if (!imageUrl) {
            getUserImageUrl();
        }
    }, []);
    
    return (
        <Container imageUrl={imageUrl} isProfileMenuOpen={isProfileMenuOpen}>
            <img src="/logo.svg" alt="Link.me Logo" />

            <div className="profile">
                <div className="texts">
                    <p>@{username}</p>
                    <button>editar o perfil</button>
                </div>

                <div
                    id="profileImg"
                    tabIndex={1}
                    onFocus={() => setIsProfileMenuOpen(true)}
                    onBlur={() => setIsProfileMenuOpen(false)}
                >
                    <div className="profileMenu">
                        <div className="triangleContainer">
                            <svg  width="25" height="25" viewBox="-50 -50 300 300">
                                <polygon className="triangle" stroke-linejoin="round" points="100,0 0,200 200,200"/>
                            </svg>
                        </div>
                        
                        <div className="signOutButton" onClick={handleSignOut}>
                            <MdLogout />
                            <p>Sair</p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export {Header}