import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify"

import { GlobalStyle } from "./styles/GlobalStyles";

import 'react-toastify/dist/ReactToastify.css';
import { CustomRoutes } from "./CustomRoutes";

function App() {
	return (
		<>
			<ToastContainer
				enableMultiContainer={false}
				autoClose={2000}
				position="top-right"
				theme="light"
			/>

			<AuthContextProvider>
				<BrowserRouter>
					<CustomRoutes />
					<GlobalStyle/>
				</BrowserRouter>
			</AuthContextProvider>
		</>
	)
}

export default App;
