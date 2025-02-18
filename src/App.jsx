import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UsersPage from './pages/UsersPage.jsx'
import './'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChartsPage from './pages/ChartsPage.jsx';
import Header from './pages/Header.jsx'
export const queryClient = new QueryClient();


const App = () => {
    return (

        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path='/' element={<Header/>} />
                    <Route path='/UsersPage' element={<UsersPage />} />
                    <Route path='/ChartsPage' element={<ChartsPage />} />
                </Routes>
            </Router>
        </QueryClientProvider>

    );
};

export default App;