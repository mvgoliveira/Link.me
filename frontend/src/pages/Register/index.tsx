import { useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";

function Register() {
	document.title = 'Login - Link.me';
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	async function handleRegister(e: React.FormEvent) {
		e.preventDefault();

		try {
			if (username && email && password && confirmPassword) {
				await api.post('/user', {username, email, password, confirmPassword});
				setError(null);
				navigate('/login');
			} else {
				setError("Preencha todos os campos");
			}
		} catch (error: any) {
            setError(error.response.data.message);
		}
	}

	return (
		<Container>
			<section>
				<article>
					<img src="./logo.svg" alt="Link.me Logo"/>
					<h1>Cadastre-se!</h1>
					<span>Crie sua conta para ter acesso gratuito à plataforma</span>

					{ error && (
						<div className="errorContainer">
							<span> Resolva o seguinte erro para prosseguir:</span>
							<p>{error}</p>
						</div>
					)}

					<form onSubmit={handleRegister}>
						<input type="text" name="username" placeholder="Nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)}/>
						<input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
						<input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
						<input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
						<button type="submit">Fazer cadastro</button>
					</form>

					<small>Já possui uma conta? <Link to="/login">Faça o login aqui</Link></small>
				</article>

			</section>
		</Container>
	)
}

export default Register