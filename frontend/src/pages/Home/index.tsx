import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { RiInstagramFill, RiLinkedinFill, RiFacebookCircleFill } from "react-icons/ri";
import {AiFillHeart} from "react-icons/ai";
import { HiLink } from "react-icons/hi";

import { ErrorNotification } from "../../components/ErrorNotification";
import { Container, LinksContainer } from "./styles";
import { api } from "../../services/api";

type UserType = {
    username: string;
    email: string;
    image_url?: string | null;
    instagram_url?: string | unknown;
    facebook_url?: string | unknown;
    linkedin_url?: string | unknown;
}

type LinkType = {
    id: string;
    title: string;
    url: string;
}

function Home() {
    const { username } = useParams();
    document.title = `${username} - Link.me`;

    const [user, setUser] = useState<UserType | null>(null);
    const [links, setLinks] = useState<[LinkType] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getUserInfos() {
            try {
                const user = await api.get(`/user/${username}`);
                setUser(user.data);
    
                const userLinks = await api.get(`/link/${username}`);
                setLinks(userLinks.data);
            } catch (error) {
                setError("usuário não existe");
            }
        }

        getUserInfos();
    }, []);

    return (
        <Container>
            <section className="upper">
                {user && (
                    <>
                        <article className="profile">
                            <div className="profileImg">
                                {user.image_url && (
                                    <img src={user.image_url} alt="user image" />
                                )}
                            </div>

                            <span>@{username}</span>
                        </article>

                        <article className="contacts">
                        <>
                                {user.linkedin_url && <button type="button" onClick={()=> window.open(`${user.linkedin_url}`,'_blank')}> <RiLinkedinFill/> </button>}
                                {user.facebook_url && <button type="button" onClick={()=> window.open(`${user.facebook_url}`,'_blank')}> <RiFacebookCircleFill/> </button>}
                                {user.instagram_url && <button type="button" onClick={()=> window.open(`${user.instagram_url}`,'_blank')}> <RiInstagramFill/> </button>}
                        </>
                        </article>
                    </>
                )}

                {links && (
                    <LinksContainer>
                        {links.map(link => (
                            <button type="button" className="link" key={link.id} onClick={()=> window.open(`${link.url}`,'_blank')}>
                                <HiLink/>
                                <p>{link.title}</p>
                            </button>
                        ))}
                    </LinksContainer>
                )}

                {error && (
                    <ErrorNotification error={error}/>
                )}
            </section>
            
            <section className="bottom">
                <article className="footer">
                    <img src="./logo.svg" alt="Link.me logo" />
                    <p>Made with <AiFillHeart color="var(--GREEN)"/> by Marcus Oliveira</p>
                </article>
            </section>
        </Container>
    )
}

export {Home}