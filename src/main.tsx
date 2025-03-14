import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { PrimeReactProvider } from "primereact/api";
import NavBar from './components/NavBar.tsx';
import Home from './pages/Home/index.tsx';
import CompanyManagement from './pages/CompanyManagement/index.tsx';
import UserManagement from './pages/UserManagement/index.tsx';
import ChatHistory from './pages/ChatHistory/index.tsx';
import ActivityHistory from './pages/ActivityHistory/ActivityHistory.tsx';
import ProtectedRoute from './utils/ProtectedRoute.tsx';
import Login from './pages/Login/index.tsx';
import SignIn from './pages/SignIn/index.tsx';
import Authentication from './pages/Authentication/index.tsx';


const LayoutWithNavBar = () => {
    return (
        <div className='flex w-screen h-screen'>
            <NavBar />
            <main className='w-full h-full'>
                <Outlet />
            </main>
        </div>
    )
}

const LayoutWithoutNavBar = () => {
    return (<>
        <main className='w-screen h-screen'>
            <Outlet />
        </main>
    </>)
}

const App = () => {


    return (
        <div className='flex bg-white dark:bg-dark-color text-black dark:text-dark-text'>
            <Routes>
                <Route element={<LayoutWithNavBar />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/companyManagement' element={<CompanyManagement />} />
                    <Route path='/userManagement' element={<UserManagement />} />
                    <Route path='/chatHistory' element={<ChatHistory />} />
                    <Route path='/Activity' element={<ActivityHistory />} />
                </Route>
                <Route element={<LayoutWithoutNavBar />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign_in' element={<SignIn />} />
                    <Route path='/authentication' element={<Authentication />} />
                </Route>
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
    <StrictMode>
        <PrimeReactProvider>
            <Router>
                <ProtectedRoute children={<App />} />
            </Router>
        </PrimeReactProvider>
    </StrictMode>
);
