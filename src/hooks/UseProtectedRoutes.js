// import React, { Children, useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'


// const ProtectedRoutes = ({children}) => {
//   const navigator = useNavigate()
//   const location = useLocation()


//   useEffect(()=> {
//     const token = window.localStorage.getItem('access_token')
//     if (!token && location.pathname !== '/login' && location.pathname !== '/signup') {
//       navigator('/login')
//     }
//     }, [location.pathname])
//     return children
// }
// export default ProtectedRoutes




import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";
// import Spinner from "../components/Spinner";


const ProtectedRoutes = ({ adminOnly = false }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // if (loading) return <Spinner />;
    if (!user) {
        return adminOnly
        ? <Navigate to="/admin/login" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (adminOnly && user.role !== "admin") {
        return <Navigate to="/admin/login" replace />;
    }
    return <Outlet />;
    };
export default ProtectedRoutes;