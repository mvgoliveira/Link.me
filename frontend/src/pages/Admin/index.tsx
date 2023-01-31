import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {RiShareFill, RiInstagramFill, RiLinkedinFill, RiFacebookCircleFill} from "react-icons/ri";
import { FaSpinner } from "react-icons/fa";
import {AiFillEye} from "react-icons/ai";
import {HiPlusSm} from "react-icons/hi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { Container, Menu } from "./styles";

import { ErrorNotification } from "../../components/ErrorNotification";
import { LinkAdmCard } from "../../components/LinkAdmCard";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

type LinkType = {
    id: string;
    title: string;
    url: string;
}

function Admin() {
    document.title = 'Dashboard - Link.me';

    const navigate = useNavigate();
    const { user, isLoading, setIsLoading } = useAuth();
    
    const [instagram, setInstagram] = useState<string>("");
    const [linkedin, setLinkedin] = useState<string>("");
    const [facebook, setFacebook] = useState<string>("");
    const [links, setLinks] = useState<LinkType[]>([]);

    const [oldInstagram, setOldInstagram] = useState<string>("");
    const [oldLinkedin, setOldLinkedin] = useState<string>("");
    const [oldFacebook, setOldFacebook] = useState<string>("");

    const [isAddNewLinkActive, setIsAddNewLinkActive] = useState<boolean>(false);
    const [newLinkTitle, setNewLinkTitle] = useState<string>("");
    const [newLinkUrl, setNewLinkUrl] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    async function handleCreateLink(e: React.FormEvent<HTMLFormElement>) {
        setIsLoading(true);

        e.preventDefault();

        try {
            if (newLinkTitle && newLinkUrl) {
                const {data} = await api.post<LinkType>(`/link/${user?.username}`, { title: newLinkTitle, url: newLinkUrl });

                setLinks(prevLinks => [data, ...prevLinks]);
                
                setIsAddNewLinkActive(false);
            } else {
                setError("Preencha todos os campos");
            }
        } catch (error: any) {
            setError(error.response.data.message)
        }

        setIsLoading(false);
    }

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

    async function handleShare() {
        navigator.clipboard.writeText(`${window.location.origin}/${user?.username}`);
        toast.success("Link copiado!");
    }

    useEffect(() => {
        window.scrollTo(0, 0);

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

    useEffect(() => {
        if (!isAddNewLinkActive) {
            setNewLinkTitle("");
            setNewLinkUrl("");
            setError(null);
        }
    }, [isAddNewLinkActive]);

    return (
        <Container>
            {user && (
                <>
                    <Header username={user.username}/>
        
                    <section className="content">
                        <form className="linkContainer">
                            {links?.map(link => (
                                <LinkAdmCard key={link.id} link={link} username={user.username}/>
                            ))}
                        </form>
        
                        <Menu isAddNewLinkActive={isAddNewLinkActive}>
                            <div className="upper">
                                <section className="addNewLinkContainer">
                                    <form action="" onSubmit={(e) => handleCreateLink(e)}>
                                        {error && (
                                            <ErrorNotification error={error}/>
                                        )}

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
                                            <button type="button" onClick={() => setIsAddNewLinkActive(false)}> Cancelar </button>
                                            <button type="submit">{isLoading ? (
                                                <FaSpinner />
                                            ) : (
                                                "Adicionar"
                                            )}</button>
                                        </article>
                                    </form>
                                </section>


                                <button onClick={() => setIsAddNewLinkActive(true)}>
                                    <HiPlusSm /> Adicionar link
                                </button>
                                
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
                                <button onClick={() => navigate(`/${user?.username}`)}><AiFillEye/> Visualizar como convidado</button>
                                <button onClick={handleShare}><RiShareFill /> Compartilhar </button>
                            </div>
                        </Menu>
                    </section>
                </>
            )}
        </Container>
    )
}

export {Admin}