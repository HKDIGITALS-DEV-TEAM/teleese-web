import "./index.css"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";


function Home() {

    const companies = [
        {
            id: 1,
            name: "RealVisXL",
            description: "Generate photo-realistic picture with RealVisXL",
            logo: "/icons/company_1.svg",
        },
        {
            id: 2,
            name: "Image Creators",
            description: "Describe the image you want to create",
            logo: "/icons/company_2.svg",
        },
        {
            id: 3,
            name: "RomanceBot",
            description: "Talks to you about relationships, doesn't  make you unconfortable",
            logo: "/icons/company_3.svg",
        },
    ]

    const menuOption = [
        {
            id: 1,
            name: "Compagnie",
            path: "/",
            icon: "/icons/edit.svg"
        },
        {
            id: 2,
            name: "Utilisateur",
            path: "/",
            icon: "/icons/newchat.svg"
        }
    ]

    const [isDisplaymenu,  setIsDisplaymenu] = useState(false);

    return(
        <div className="p-16 flex flex-col gap-8 w-full">
            <div>
                <Header />
            </div>
            <div className="flex justify-center">
                <h1 className="text-usual-green text-4xl font-bold">Bienvenue !</h1>
            </div>
            <div className="bg-gray-200 dark:bg-dark-bg-color relative w-full flex justify-center items-center h-64 rounded-xl">
                <img className="absolute left-2 top-2" src="/icons/cpu.svg" alt="cpu" />
                <img src="/icons/teleese_logo.svg" alt="logo" />
            </div>
            <div className="flex flex-col gap-4">
                <p>Mes companies</p>
                <div className="flex gap-2">
                    {
                        companies.map((company) => (
                            <div key={company.id} className="w-40 hover:bg-light-purple hover:dark:bg-dark-bg-color p-2 rounded-md cursor-pointer flex flex-col gap-1 transition-all duration-200 ease-in-out">
                                <div className="bg-black flex items-center p-3 w-14 h-14 justify-center rounded-full">
                                    <img src={company.logo} alt="company_1" />
                                </div>
                                <p className="font-semibold">{ company.name }</p>
                                <p className="text-gray-500 dark:text-gray-100 text-xs">{ company.description }</p>
                            </div>
                        ))
                    }
                    <NavLink to={"/companyManagement"} className="seeMoreContainer hover:dark:text-black overflow-hidden flex justify-center items-center bg-dark-bg-color relative text-white p-2 rounded-md cursor-pointer">
                        <div className="flex relative z-10 items-center justify-center gap-2">
                            <p>Voir plus</p>
                            <p className="rotate-45">&times;</p>
                        </div>
                        <div className="hoverDivEffect transition-all duration-300 ease-in-out absolute rounded-md bg-dark-purple dark:bg-light-purple w-full h-full"></div>
                        <div className="hoverDiv2Effect transition-all duration-300 ease-in-out absolute rounded-md bg-dark-purple dark:bg-light-purple w-full h-full"></div>
                    </NavLink>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p>Ajouter</p>
                <div className="relative">
                    <div onClick={() => {
                        isDisplaymenu ? setIsDisplaymenu(false) : setIsDisplaymenu(true)
                    }} className="border border-black cursor-pointer p-2 w-10 h-10 flex items-center justify-center rounded-full"><p className="rotate-45 text-2xl">&times;</p></div>
                    {
                        isDisplaymenu ? (
                            <div className="absolute top-4 left-14 w-fit rounded-md shadow-lg flex flex-col border border-gray-100">
                                {
                                    menuOption.map((option) => (
                                        <NavLink to={option.path} key={option.id} className="flex gap-2 hover:bg-gray-100 px-4 py-3 rounded-md">
                                            <img src={option.icon} alt={option.name} />
                                            <p>{ option.name }</p>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        ) : (<div></div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;