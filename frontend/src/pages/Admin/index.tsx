import { Header } from "../../components/Header";
import { Container, LinksContainer } from "./styles";
import {HiPlusSm} from "react-icons/hi";
import {AiFillEye} from "react-icons/ai";
import {RiShareFill, RiInstagramFill, RiLinkedinFill, RiFacebookCircleFill} from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { LinkAdmCard } from "../../components/LinkAdmCard";

type LinkType = {
    id: string;
    title: string;
    url: string;
}

function Admin() {
    const {user} = useAuth();
    
    const [instagram, setInstagram] = useState<string>("");
    const [linkedin, setLinkedin] = useState<string>("");
    const [facebook, setFacebook] = useState<string>("");
    const [links, setLinks] = useState<[LinkType] | null>(null);

    const [oldInstagram, setOldInstagram] = useState<string>("");
    const [oldLinkedin, setOldLinkedin] = useState<string>("");
    const [oldFacebook, setOldFacebook] = useState<string>("");

    async function handleUpdateInstagram() {
        try {
            await api.patch(`/user/${user?.username}`, { instagram_url: instagram });
            setOldInstagram(instagram);
        } catch (error) {
            setInstagram(oldInstagram);
        }
    }

    async function handleUpdateLinkedin() {
        try {
            await api.patch(`/user/${user?.username}`, { linkedin_url: linkedin });
            setOldLinkedin(linkedin);
        } catch (error) {
            setLinkedin(oldLinkedin);
        }
    }

    async function handleUpdateFacebook() {
        try {
            await api.patch(`/user/${user?.username}`, { facebook_url: facebook });
            setOldFacebook(facebook);
        } catch (error) {
            setFacebook(oldFacebook);
        }
    }

    useEffect(() => {
        if (user) {
            async function getUserInfos() {
                const {data: userData} = await api.get(`/user/${user?.username}`);
                setInstagram(userData.instagram_url);
                setLinkedin(userData.linkedin_url);
                setFacebook(userData.facebook_url);
                
                setOldInstagram(userData.instagram_url);
                setOldLinkedin(userData.linkedin_url);
                setOldFacebook(userData.facebook_url);

                const {data: linksData} = await api.get(`/link/${user?.username}`);
                setLinks(linksData);
            }

            getUserInfos();
        }
    }, [user]);

    return (
        <Container>
            {user && (
                <>
                    <Header username={user.username}/>
        
                    <section className="content">
                        <LinksContainer>
                            {links?.map(link => (
                                <LinkAdmCard key={link.id} link={link} username={user.username}/>
                            ))}
                        </LinksContainer>
        
                        <article className="menu">
                            <div className="upper">
                                <button><HiPlusSm /> Adicionar link</button>
        
                                <div className="socialInput" onClick={() => document.getElementById("InstagramInput")?.focus()}>
                                    <RiInstagramFill />
                                    <input
                                        type="text"
                                        id="InstagramInput"
                                        placeholder="https://www.instagram.com/"
                                        value={instagram}
                                        onChange={(e) => setInstagram(e.target.value)}
                                        onBlur={handleUpdateInstagram}
                                    />
                                </div>
        
                                <div className="socialInput" onClick={() => document.getElementById("LinkedInInput")?.focus()}>
                                    <RiLinkedinFill />
                                    <input
                                        type="text"
                                        id="LinkedInInput"
                                        placeholder="https://www.linkedin.com/"
                                        value={linkedin}
                                        onChange={(e) => setLinkedin(e.target.value)}
                                        onBlur={handleUpdateLinkedin}
                                    />
                                </div>
        
                                <div className="socialInput" onClick={() => document.getElementById("FacebookInput")?.focus()}>
                                    <RiFacebookCircleFill />
                                    <input
                                        type="text"
                                        id="FacebookInput"
                                        placeholder="https://pt-br.facebook.com/"
                                        value={facebook}
                                        onChange={(e) => setFacebook(e.target.value)}
                                        onBlur={handleUpdateFacebook}
                                    />
                                </div>
                            </div>
        
                            <div className="bottom">
                                <button><AiFillEye/> Visualizar como convidado</button>
                                <button><RiShareFill /> Compartilhar</button>
                            </div>
                        </article>
                    </section>
                </>
            )}
        </Container>
    )
}

export {Admin}