import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { MdOutlineArrowBackIos } from "react-icons/md";

import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Container } from "./styles";

import { ErrorNotification } from "../../components/ErrorNotification";
import { Input } from "../../components/Input";

function Profile() {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    const [error, setError] = useState("");
    
    const [imageUrl, setImageUrl] = useState<string>("");
    const [oldEmail, setOldEmail] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [isDeleting, setIsDeleting] = useState(false);

    type senderDataType = {
        email?: string;
        password?: string;
        confirmPassword?: string;
    }

    async function handleUpdateAccount(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const senderData = {} as senderDataType;
            
            if (email) {
                senderData.email = email;
            }

            if (password && confirmPassword) {
                senderData.password = password;
                senderData.confirmPassword = confirmPassword;
            } else if (password && !confirmPassword) {
                return setError("Campo de confirmação de senha obrigatório");
            } else if (!password && confirmPassword) {
                return setError("Campo de senha obrigatório");
            }

            if (!email && !password && !confirmPassword) {
                setError("Nenhuma informação foi alterada");
            } else {
                await api.patch(`/user/${user?.username}`, senderData);
                
                toast.success("Usuário alterado com sucesso");
                setError("");
            }
            
        } catch (error: any) {
            setError(error.response.data.message);
        }
    }

    async function handleDeleteAccount() {
        if (isDeleting === false) {
            setIsDeleting(true);
        } else {
            await api.delete(`/user/${user?.username}`);
            signOut();
            navigate('/login');
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        async function getUserImageUrl() {
            const {data} = await api.get(`/user/${user?.username}`);
            setImageUrl(data.image_url);
            setOldEmail(data.email);
        }
        
        if (!imageUrl) {
            getUserImageUrl();
        }
    }, []);

    return (
        <Container>
            <section>
                <button onClick={() => navigate('/admin')}><MdOutlineArrowBackIos/> Voltar</button>
                
                <article className="userInfos">
                    <div className="profileImg">
                        {imageUrl && (
                            <img src={imageUrl} alt="User avatar"/>
                        )}
                    </div>
                    
                    {user && (
                        <span>@{user?.username}</span>
                    )}
                </article>

                <form onSubmit={(e) => handleUpdateAccount(e)}>
                    
                    <article className="inputsContainer">
                        {error && (
                            <ErrorNotification error={error}/>
                        )}
                        
                        <Input
                            placeholder="Digite o novo email"
                            type="text"
                            label="Email"
                            value={email ? email : oldEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        
                        <Input
                            placeholder="Digite a nova senha"
                            type="password"
                            label="Nova senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        
                        <Input
                            placeholder="Confirme a nova senha"
                            type="password"
                            label="Confirmar nova senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </article>

                    <article className="buttonsContainer">
                        <button type="button" onClick={() => navigate("/admin")}>Cancelar</button>
                        <button type="submit">Salvar</button>
                    </article>
                </form>

                <article className="deleteAccountContainer">
                    <div className="deleteAccountTexts">
                        {isDeleting ? (
                            <span>Tem certeza?</span>
                        ) : (
                            <span>Deletar Conta</span>
                        )}
                        <p>Essa ação é irreversível</p>
                    </div>
                    
                    <div className="deleteAccountButtons">
                        {isDeleting ? (
                            <>
                                <button onClick={() => setIsDeleting(false)}>Não</button>
                                <button onClick={handleDeleteAccount}>Sim</button>
                            </>
                        ) : (
                            <button className="deleteButton" onClick={handleDeleteAccount}>Delete sua conta</button>
                        )}
                    </div>
                </article>
            </section>
        </Container>
    )
}

export {Profile}