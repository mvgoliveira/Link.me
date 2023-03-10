import { useEffect } from 'react';
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
            {user && (<>
                <Route path="/" element={!user.username ? <Login/> : <Navigate replace to={`/admin`}/>}/>
                <Route path="/login" element={!user.username ? <Login/> : <Navigate replace to={`/admin`}/>}/>
                <Route path="/register" element={!user.username ? <Register/> : <Navigate replace to={`/admin`}/>}/>
                <Route path='/:username' element={ <Home/> }/>
                <Route path='/admin' element={user.username ? <Admin/> : <Navigate replace to={`/login`}/>}/>
                <Route path='/admin/profile' element={user.username ? <Profile/> : <Navigate replace to={`/login`}/>}/>
            </>)}
        </Routes>
    )
}

export {CustomRoutes}