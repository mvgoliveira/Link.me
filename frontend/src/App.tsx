import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<ToastContainer
				enableMultiContainer={false}
				autoClose={2000}
				position="top-right"
				theme="dark"
			/>

			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login/>}/>
					<Route path="/register" element={<Register/>}/>
				</Routes>
				<GlobalStyle/>
			</BrowserRouter>
		</>
	)
}

export default App;
