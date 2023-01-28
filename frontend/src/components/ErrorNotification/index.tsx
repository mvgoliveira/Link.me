import { Container } from "./styles"

type propsType = {
	error: string
}

function ErrorNotification({error}: propsType) {
  	return (
		<Container>
			<span> Resolva o seguinte erro para prosseguir:</span>
			<p>{error}</p>
		</Container>
  	)
}

export {ErrorNotification}