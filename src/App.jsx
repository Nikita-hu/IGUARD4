import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import OnePage from './pages/OnePage.jsx'
import './'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TwoPage from './pages/TwoPage.jsx';
import Header from './pages/Header.jsx'
export const queryClient = new QueryClient();


const App = () => {
    return (

        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path='/' element={<Header/>} />
                    <Route path='/Users' element={<OnePage />} />
                    <Route path='/TwoPage' element={<TwoPage />} />
                </Routes>
            </Router>
        </QueryClientProvider>

    );
};

export default App;