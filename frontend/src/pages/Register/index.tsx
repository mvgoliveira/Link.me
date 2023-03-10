import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { FaSpinner } from "react-icons/fa";

import { api } from "../../services/api";
import { Container } from "./styles";

import { ErrorNotification } from "../../components/ErrorNotification";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../components/Input";

function Register() {
	document.title = 'Cadastro - Link.me';
	const navigate = useNavigate();

	const {isLoading, setIsLoading} = useAuth();

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	async function handleRegister(e: React.FormEvent) {
		setIsLoading(true);
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
		setIsLoading(false);
	}

	useEffect(() => {
		setError("");
	}, []);

	return (
		<Container>
			<section>
				<article>
					<img src="./logo.svg" alt="Link.me Logo"/>
					<h1>Cadastre-se!</h1>
					<span>Crie sua conta para ter acesso gratuito à plataforma</span>

					{ error && (
						<ErrorNotification error={error}/>
					)}

					<form onSubmit={handleRegister}>
						<Input type="text" name="username" placeholder="Nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)}/>
						<Input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
						<Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
						<Input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
						<button type="submit">{isLoading ? (
							<FaSpinner />
						) : (
							"Fazer cadastro"
						)}</button>
					</form>

					<small>Já possui uma conta? <Link to="/login">Faça o login aqui</Link></small>
				</article>

			</section>
		</Container>
	)
}

export {Register}