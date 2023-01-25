import { Container } from "./styles";

function Login() {
	document.title = 'Login - Link.me';

	return (
		<Container>
			<section>
				<article>
					<img src="./logo.svg" alt="Link.me Logo"/>
					<h1>Bem-vindo!</h1>
					<span>Faça login para entrar na sua conta</span>

					<form action="">
						<input type="text" placeholder="Email"/>
						<input type="text" placeholder="Senha"/>
						<button type="submit">Fazer login</button>
					</form>

					<small>ainda não possui uma conta? <a href="">inscreva-se aqui</a></small>
				</article>

			</section>
		</Container>
	)
}

export default Login