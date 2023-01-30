import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

import { ErrorNotification } from "../../components/ErrorNotification";

function Login() {
	document.title = 'Login - Link.me';
	const navigate = useNavigate();

	const [email, setEmail] = useState(""); 
	const [password, setPassword] = useState(""); 

	const { signIn, error, handleSetError, user } = useAuth();

	async function handleSignIn(e: React.FormEvent) {
		e.preventDefault();

		if (email && password) {
			signIn(email, password);
		} else {
			handleSetError("Preencha todos os campos");
		}
	}

	useEffect(() => {
		if(user?.username) {
			navigate(`/admin/${user.username}`);
		}
	}, [user]);

	useEffect(() => {
		handleSetError("");
	}, []);

	return (
		<Container>
			<section>
				<article>
					<img src="./logo.svg" alt="Link.me Logo"/>
					<h1>Bem-vindo!</h1>
					<span>Faça login para entrar na sua conta</span>

					{error && (
						<ErrorNotification error={error}/>
					)}

					<form onSubmit={handleSignIn}>
						<input 
							type="text"
							name="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						
						<input
							type="password"
							name="password"
							placeholder="Senha"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button type="submit">Fazer login</button>
					</form>

					<small>ainda não possui uma conta? <Link to="/register">inscreva-se aqui</Link></small>
				</article>
			</section>
		</Container>
	)
}

export {Login}