import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage.jsx';
import ChartsPage from './pages/ChartsPage.jsx';
import Layout from './Layout.jsx'
import { Provider } from 'react-redux';
import { store } from "./redux/store.js"
import Authed from './pages/Authed.jsx';
export const queryClient = new QueryClient();

const App = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Routes>
                        <Route path='/login' element={<Authed />}/>
                        <Route path='/' element={<Layout />}>
                            <Route path='UsersPage' element={<UsersPage />} />
                            <Route path='ChartsPage' element={<ChartsPage />} />
                        </Route>
                    </Routes>
                </Router>
            </QueryClientProvider>
        </Provider>
    );
};

export default App;


