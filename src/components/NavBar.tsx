import { useKeycloak } from "@react-keycloak/web";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { LocalStorageManagement } from "../utils/LocalStorageManagement";


function NavBar() {

    const currentPath = useLocation().pathname
    const { keycloak } = useKeycloak();

    const [navBar, setNavBar] = useState(
        [
            {
                id: 1,
                title: 'Company',
                path: '/companyManagement',
                icon: "/icons/work.svg",
                isSelected: true,
            },
            {
                id: 2,
                title: 'Company',
                path: '/userManagement',
                icon: "/icons/user.svg",
                isSelected: false,
            },
            {
                id: 3,
                title: 'Activity',
                path: '/Activity',
                icon: "/icons/activity.svg",
                isSelected: false,
            },
            {
                id: 4,
                title: 'ChatHistory',
                path: '/chatHistory',
                icon: "/icons/chat.svg",
                isSelected: false,
            }
        ]
    )

    function changeSelected() {
        navBar.map((element) => {
          element.isSelected = currentPath == element.path;
        });
        setNavBar(navBar);
    }

    function toggleTheme(isDark: boolean) {
        localStorage.theme = isDark ? 'dark' : 'light'; // Save preference
        document.documentElement.classList.toggle('dark', isDark);
    }

    return (
        <div className="h-screen bg-usual-gray dark:bg-dark-bg-color justify-between w-24 flex flex-col items-center py-16">
            <div>
                <NavLink to={"/"}>
                    <img src="/icons/teleese_logo.svg" alt="logo" />
                </NavLink>
            </div>
            <div className="flex flex-col gap-4">
                {navBar.map((item) => (
                    <NavLink onClick={() => changeSelected} className={item.path === currentPath ? "bg-dark-purple dark:bg-light-purple rounded-full p-2 flex items-center justify-center" : "bg-none dark:bg-dark-purple rounded-full p-2 flex items-center justify-center"} key={item.id} to={item.path}>
                        <img className="w-8 h-8 text-red-400" src={item.icon} alt={item.title} />
                    </NavLink>
                ))}
            </div>
            <div className="flex flex-col gap-8">
                <img className="w-8 h-8 cursor-pointer" src="/icons/logout.svg" alt="logout" onClick={() => keycloak.logout()} />
                <img onClick={() => toggleTheme(false)} className="w-8 h-8 cursor-pointer" src="/icons/sun.svg" alt="light" />
                <img onClick={() => toggleTheme(true)} className="w-8 h-8 cursor-pointer" src="/icons/moon.svg" alt="dark" />
            </div>
        </div>
    )
}

export default NavBar;