import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Admin } from './pages/Admin';
import { Home } from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'

function CustomRoutes() {
    const {user} = useAuth();

    return (
        <Routes>
            <Route path="/" element={!user ? <Login/> : <Navigate replace to={`/admin/${user.username}`}/>}/>
            <Route path="/login" element={!user ? <Login/> : <Navigate replace to={`/admin/${user.username}`}/>}/>
            <Route path="/register" element={!user ? <Register/> : <Navigate replace to={`/admin/${user.username}`}/>}/>
            <Route path='/:username' element={ <Home/> }/>
            <Route path='/admin/:username' element={user ? <Admin/> : <Navigate replace to={`/login`}/>}/>
        </Routes>
    )
}

export {CustomRoutes}