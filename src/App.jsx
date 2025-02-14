import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import OnePage from './pages/OnePage.jsx'
import './'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Random from './Components/Random.jsx';
export const queryClient = new QueryClient();


const App = () => {
    return (

        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path='/' element={<OnePage />} />
                    <Route path='/Random' element={<Random />} />
                </Routes>
            </Router>
        </QueryClientProvider>

    );
};

export default App;