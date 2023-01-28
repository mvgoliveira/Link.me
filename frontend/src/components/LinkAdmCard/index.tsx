import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import {FaTrash, FaPen} from "react-icons/fa";
import { api } from "../../services/api";
import { toast } from "react-toastify";

type LinkType = {
    id: string;
    title: string;
    url: string;
}

type PropsType = {
    link: LinkType;
    username: string;
}

function LinkAdmCard({link, username}: PropsType) {
    const [title, setTitle] = useState<string>(link.title);
    const [url, setUrl] = useState<string>(link.url);

    const [oldTitle, setOldTitle] = useState<string>(link.title);
    const [oldUrl, setOldUrl] = useState<string>(link.url);

    const [isTitleInputOnFocus, setIsTitleInputOnFocus] = useState(false);
    const [isUrlInputOnFocus, setIsUrlInputOnFocus] = useState(false);

    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    async function handleUpdateTitle() {
        setIsTitleInputOnFocus(false);

        try {
            await api.patch(`/link/${username}/${link.id}`, { title });
            setOldTitle(title);
        } catch (error) {
            setTitle(oldTitle);
        }
    }

    async function handleUpdateUrl() {
        setIsUrlInputOnFocus(false);

        try {
            await api.patch(`/link/${username}/${link.id}`, { url });
            setOldUrl(url);
        } catch (error) {
            setUrl(oldUrl);
        }
    }

    async function handleDelete() {
        try {
            if (isDeleting) {
                await api.delete(`/link/${username}/${link.id}`); 
                setIsDeleted(true);
            } else {
                setIsDeleting(true);
            }
        } catch (error) {
            toast.error("Não foi possível deletar o Link");
        }
    }

    useEffect(() => {
        if (isTitleInputOnFocus) {
            document.getElementById(`inputTitle#${link.id}`)?.focus();
        }
    }, [isTitleInputOnFocus]);

    useEffect(() => {
        if (isUrlInputOnFocus) {
            document.getElementById(`inputUrl#${link.id}`)?.focus();
        }
    }, [isUrlInputOnFocus]);
    
    return (
        <Container isDeleted={isDeleted}>
            <section className="texts">
                <div className="inputContainer" onClick={() => setIsTitleInputOnFocus(true)}>
                    {isDeleting ? (
                        <p className="linkTitle">Deseja deletar esse Link?</p>
                    ) : (
                        <>
                            <p 
                                className="linkTitle"
                                style={{ display: `${isTitleInputOnFocus ? "none" : "block"}` }}
                            >
                                {title}
                            </p>
                            
                            <input
                                type="text"
                                className="linkTitle"
                                id={`inputTitle#${link.id}`}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onBlur={handleUpdateTitle}
                                style={{ display: `${isTitleInputOnFocus ? "inline-grid" : "none"}` }}
                            />
                            
                            <FaPen id="titleSvg"/>
                        </>
                    )}
                </div>
                
                <div className="inputContainer" onClick={() => setIsUrlInputOnFocus(true)}>
                    {isDeleting ? (
                        <p className={"linkUrl"}> Essa ação é irreversível! </p>
                    ) : (
                        <>
                            <p 
                                className={"linkUrl"}
                                style={{ display: `${isUrlInputOnFocus ? "none" : "block"}` }}
                            >
                                {url}
                            </p>
        
                            <input
                                size={20}
                                type="text"
                                className="linkUrl"
                                id={`inputUrl#${link.id}`}
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                onBlur={handleUpdateUrl}
                                style={{ display: `${isUrlInputOnFocus ? "inline-grid" : "none"}` }}
                            />
        
                            <FaPen id="urlSvg"/>
                        </>
                    )}
                </div>

            </section>

            {isDeleting ? (
                <section className="buttonsContainer">
                    <button onClick={() => setIsDeleting(false)}>Não</button>
                    <button onClick={handleDelete}>Sim</button>
                </section>
            ) : (
                <FaTrash onClick={handleDelete}/>
            )}
        </Container>
    )

}

export {LinkAdmCard}