import { Header } from "../../components/Header";
import { Container, Menu } from "./styles";
import {HiPlusSm} from "react-icons/hi";
import {AiFillEye} from "react-icons/ai";
import {RiShareFill, RiInstagramFill, RiLinkedinFill, RiFacebookCircleFill} from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { LinkAdmCard } from "../../components/LinkAdmCard";
import { Input } from "../../components/Input";

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

    const [isAddNewLinkActive, setIsAddNewLinkActive] = useState<boolean>(false);
    const [newLinkTitle, setNewLinkTitle] = useState<string>("");
    const [newLinkUrl, setNewLinkUrl] = useState<string>("");

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
                        <article className="linkContainer">
                            {links?.map(link => (
                                <LinkAdmCard key={link.id} link={link} username={user.username}/>
                            ))}
                        </article>
        
                        <Menu isAddNewLinkActive={isAddNewLinkActive}>
                            <div className="upper">
                                <section className="addNewLinkContainer">
                                    <Input
                                        type="text"
                                        placeholder="Título"
                                        value={newLinkTitle}
                                        onChange={(e) => setNewLinkTitle(e.target.value)}
                                        onBlur={handleUpdateInstagram}
                                    />

                                    <Input
                                        type="text"
                                        placeholder="URL"
                                        value={newLinkUrl}
                                        onChange={(e) => setNewLinkUrl(e.target.value)}
                                        onBlur={handleUpdateInstagram}
                                    />

                                    <article className="addNewLinkButtonsContainer">
                                        <button onClick={() => setIsAddNewLinkActive(false)}> Cancelar </button>
                                        <button> Adicionar </button>
                                    </article>
                                </section>


                                <button onClick={() => setIsAddNewLinkActive(true)}><HiPlusSm /> Adicionar link</button>
                                
                                <Input
                                    Icon={RiInstagramFill}
                                    type="text"
                                    id="InstagramInput"
                                    placeholder="https://www.instagram.com/"
                                    value={instagram}
                                    onChange={(e) => setInstagram(e.target.value)}
                                    onBlur={handleUpdateInstagram}
                                />

                                <Input
                                    Icon={RiLinkedinFill}
                                    type="text"
                                    id="LinkedInInput"
                                    placeholder="https://www.linkedin.com/"
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    onBlur={handleUpdateLinkedin}
                                />

                                <Input
                                    Icon={RiFacebookCircleFill}
                                    type="text"
                                    id="FacebookInput"
                                    placeholder="https://pt-br.facebook.com/"
                                    value={facebook}
                                    onChange={(e) => setFacebook(e.target.value)}
                                    onBlur={handleUpdateFacebook}
                                />
                            </div>
        
                            <div className="bottom">
                                <button><AiFillEye/> Visualizar como convidado</button>
                                <button><RiShareFill /> Compartilhar</button>
                            </div>
                        </Menu>
                    </section>
                </>
            )}
        </Container>
    )
}

export {Admin}