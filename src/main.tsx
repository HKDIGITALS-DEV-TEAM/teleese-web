import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from "primereact/api";
import { ReactKeycloakProvider } from '@react-keycloak/web';
import NavBar from './components/NavBar.tsx';
import Home from './pages/Home/index.tsx';
import CompanyManagement from './pages/CompanyManagement/index.tsx';
import UserManagement from './pages/UserManagement/index.tsx';
import ChatHistory from './pages/ChatHistory/index.tsx';
import ActivityHistory from './pages/ActivityHistory/ActivityHistory.tsx';
import keycloakInstance from './utils/KeycloakConfig.ts';

const App = () => {


    return (
        <div className='flex bg-white dark:bg-dark-color text-black dark:text-dark-text'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/companyManagement' element={<CompanyManagement />} />
                <Route path='/userManagement' element={<UserManagement />} />
                <Route path='/chatHistory' element={<ChatHistory />} />
                <Route path='/Activity' element={<ActivityHistory />} />
            </Routes>
        </div>
    );
};

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
        <PrimeReactProvider>
            <ReactKeycloakProvider authClient={keycloakInstance} initOptions={{ onLoad: 'login-required' }}>
                <Router>
                    <App />
                </Router>
            </ReactKeycloakProvider>
        </PrimeReactProvider>
    // </StrictMode>
);
