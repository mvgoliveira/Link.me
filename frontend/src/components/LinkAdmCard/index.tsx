import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import {FaTrash, FaPen} from "react-icons/fa";
import { api } from "../../services/api";

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

    useEffect(() => {
        if (isTitleInputOnFocus) {
            document.getElementById("inputTitle")?.focus();
        }
    }, [isTitleInputOnFocus]);

    useEffect(() => {
        if (isUrlInputOnFocus) {
            document.getElementById("inputUrl")?.focus();
        }
    }, [isUrlInputOnFocus]);
    
    return (
        <Container>
            <section className="texts">
                <div className="inputContainer">
                    <p 
                        className="linkTitle"
                        style={{ display: `${isTitleInputOnFocus ? "none" : "block"}` }}
                        onClick={() => setIsTitleInputOnFocus(true)}
                    >
                        {title}
                    </p>
                    
                    <input
                        type="text"
                        className="linkTitle"
                        id="inputTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={handleUpdateTitle}
                        style={{ display: `${isTitleInputOnFocus ? "inline-grid" : "none"}` }}
                    />
                    
                    <FaPen />
                </div>
                
                <div className="inputContainer">
                    <p 
                        className="linkUrl"
                        style={{ display: `${isUrlInputOnFocus ? "none" : "block"}` }}
                        onClick={() => setIsUrlInputOnFocus(true)}
                    >
                        {url}
                    </p>

                    <input
                        size={20}
                        type="text"
                        className="linkUrl"
                        id="inputUrl"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onBlur={handleUpdateUrl}
                        style={{ display: `${isUrlInputOnFocus ? "inline-grid" : "none"}` }}
                    />

                    <FaPen />
                </div>

            </section>

            <FaTrash />
        </Container>
    )
}

export {LinkAdmCard}