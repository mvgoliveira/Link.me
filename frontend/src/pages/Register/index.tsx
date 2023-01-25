import { Container } from "./styles";

function Register() {
	document.title = 'Login - Link.me';

	return (
		<Container>
			<section>
				<article>
					<img src="./logo.svg" alt="Link.me Logo"/>
					<h1>Cadastre-se!</h1>
					<span>Crie sua conta para ter acesso gratuito à plataforma</span>

					<div className="errorContainer">
						<span> Resolva o seguintes erros para prosseguir:</span>
						<p>Nome de usuário não pode conter espaços</p>
					</div>

					<form action="">
						<input type="text" placeholder="Nome de usuário"/>
						<input type="text" placeholder="Email"/>
						<input type="text" placeholder="Senha"/>
						<input type="text" placeholder="Confirmar senha"/>
						<button type="submit">Fazer cadastro</button>
					</form>

					<small>Já possui uma conta? <a href="/login">Faça o login aqui</a></small>
				</article>

			</section>
		</Container>
	)
}

export default Register