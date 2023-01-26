import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

function Login() {
	document.title = 'Login - Link.me';

	const [email, setEmail] = useState(""); 
	const [password, setPassword] = useState(""); 

	const { signIn, error } = useAuth();

	async function handleSignIn(e: React.FormEvent) {
		e.preventDefault();

		try {
			signIn(email, password);
		} catch (error: any) {
		}
	}

	return (
		<Container>
			<section>
				<article>
					<img src="./logo.svg" alt="Link.me Logo"/>
					<h1>Bem-vindo!</h1>
					<span>Faça login para entrar na sua conta</span>

					{error && (
						<div className="errorContainer">
							<span> Resolva o seguinte erro para prosseguir:</span>
							<p>{error}</p>
						</div>
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

					<small>ainda não possui uma conta? <a href="/register">inscreva-se aqui</a></small>
				</article>

			</section>
		</Container>
	)
}

export default Login