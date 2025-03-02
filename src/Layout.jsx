import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './pages/Header.jsx'
import { useSelector } from 'react-redux';
import Authed from './pages/Authed.jsx';
const Layout = () => {
    const authed = useSelector((state) => state.authed)
    console.log(authed)
    return (
        <>
{authed ? (
                <>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                </>
            ) : (
                <Authed />
            )}
        </>
    )
}
export default Layout;