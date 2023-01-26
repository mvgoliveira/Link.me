import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify"

import { GlobalStyle } from "./styles/GlobalStyles";

import Register from "./pages/Register";
import Login from "./pages/Login";

import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<ToastContainer
				enableMultiContainer={false}
				autoClose={2000}
				position="top-right"
				theme="light"
				style={{color: "#000"}}
			/>

			<AuthContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Login/>}/>
						<Route path="/register" element={<Register/>}/>
					</Routes>
					<GlobalStyle/>
				</BrowserRouter>
			</AuthContextProvider>
		</>
	)
}

export default App;
