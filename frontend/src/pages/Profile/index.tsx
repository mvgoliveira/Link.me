import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function Profile() {
    const { user } = useAuth();
    
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        async function getUserImageUrl() {
            const {data} = await api.get(`/user/${user?.username}`);
            setImageUrl(data.image_url);
        }
        
        if (!imageUrl) {
            getUserImageUrl();
        }
    }, []);

    return (
        <Container>
            <section>
                <button><MdOutlineArrowBackIos/> Voltar</button>
                
                <article className="userInfos">
                    <div className="userImage">
                        <img src={imageUrl} alt="User avatar" />
                    </div>

                    <span>@{user?.username}</span>
                </article>

                <form action="">
                    <article className="inputsContainer">
                        <Input placeholder="Digite o novo email" type="text" value={user?.email} label="Email"/>
                        
                        <Input placeholder="Digite a nova senha" type="password" value="******************" label="Senha"/>
                    </article>

                    <article className="buttonsContainer">
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </article>
                </form>

                <article className="deleteAccountContainer">
                    <div className="deleteAccountTexts">
                        <span>Deletar Conta</span>
                        <p>Essa ação é irreversível</p>
                    </div>
                    
                    <div className="deleteAccountButtons">
                        {/* <button>Não</button>
                        <button>Sim</button> */}

                        <button>Delete sua conta</button>
                    </div>
                </article>
            </section>
        </Container>
    )
}

export {Profile}