import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import { Admin } from './pages/Admin';
import { Home } from './pages/Home';
import {Login} from './pages/Login'
import { Profile } from './pages/Profile';
import {Register} from './pages/Register';

function CustomRoutes() {
    const {user} = useAuth();

    return (
        <Routes>
            {user?.username && (<>
                <Route path="/" element={!user ? <Login/> : <Navigate replace to={`/admin`}/>}/>
                <Route path="/login" element={!user ? <Login/> : <Navigate replace to={`/admin`}/>}/>
                <Route path="/register" element={!user ? <Register/> : <Navigate replace to={`/admin`}/>}/>
                <Route path='/:username' element={ <Home/> }/>
                <Route path='/admin' element={user ? <Admin/> : <Navigate replace to={`/login`}/>}/>
                <Route path='/admin/profile' element={user ? <Profile/> : <Navigate replace to={`/login`}/>}/>
            </>)}
        </Routes>
    )
}

export {CustomRoutes}