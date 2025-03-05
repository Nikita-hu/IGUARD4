import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './pages/Header.jsx'
import { useSelector } from 'react-redux';
const Layout = () => {
    const authed = useSelector((state) => state.authed)
    const navigate = useNavigate()

    useEffect(() => {
        if (!authed) {
            navigate('./login')
        } else {
            console.log('sdvvds')
        }
    }, [authed])

    if (!authed) {
        return null
    }

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout;