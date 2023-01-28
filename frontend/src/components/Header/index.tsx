import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles"

type propsType = {
	username: string | undefined;
}

function Header({username}: propsType) {
    const [imageUrl, setImageUrl] = useState<string>("");

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
        <Container imageUrl={imageUrl}>
            <img src="/logo.svg" alt="Link.me Logo" />

            <div className="profile">
                <div className="texts">
                    <p>@{username}</p>
                    <button>editar o perfil</button>
                </div>

                <div className="profileImg"></div>
            </div>
        </Container>
    )
}

export {Header}