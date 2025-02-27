import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage.jsx';
import ChartsPage from './pages/ChartsPage.jsx';
import Layout from './Layout.jsx'

export const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='UsersPage' element={<UsersPage />} />
                        <Route path='ChartsPage' element={<ChartsPage />} />
                    </Route>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;


