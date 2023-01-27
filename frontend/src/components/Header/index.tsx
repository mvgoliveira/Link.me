import { Container } from "./styles"

type propsType = {
	username: string | undefined;
}

function Header({username}: propsType) {
    return (
        <Container>
            <img src="/logo.svg" alt="Link.me Logo" />

            <div className="profile">
                <div className="texts">
                    <p>@{username}</p>
                    <button>editar o perfil</button>
                </div>

                <div className="profileImg">

                </div>
            </div>
        </Container>
    )
}

export {Header}