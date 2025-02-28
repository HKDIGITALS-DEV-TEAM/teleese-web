import "./index.css"
import { useState } from "react";
import Header from "../../components/Header";
import AddUser from "./AddUser";
import ManageUser from "./ManageUser";


function UserManagement() {

    const [pageToDisplay, setPageToDisplay] = useState(0);
    const [selectedCompany, setSelectedCompany] = useState(1);
    const [isDisplayAddUserPopUp, setIsDisplayAddUserPopUp] = useState(false);
    const [isDisplayManageUserPopUp, setIsDisplayManageUserPopUp] = useState(false);
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

    function switchPage(page: number) {
        setPageToDisplay(page);
    }

    return(
        <div className="flex gap-16 flex-col w-full">
            {
                pageToDisplay == 0 ? (

                    <div className="flex gap-16 flex-col items-center justify-center h-full w-full">
                        <div className="flex flex-col gap-2 text-xl text-center">
                            <h1 className="font-semibold text-usual-green text-5xl">Gestion des utilisateurs</h1>
                            <h2>Choisir la compagnie font vous souhaitez gerer les utilisateurs</h2>
                        </div>
                        <div className="flex gap-2">
                            {
                                companies.map((company) => (
                                    <div key={company.id} onClick={() => {
                                            setSelectedCompany(company.id);
                                            switchPage(1);
                                        }}
                                        className="w-40 hover:bg-light-purple hover:dark:bg-dark-bg-color p-2 rounded-md cursor-pointer flex flex-col gap-1 transition-all duration-200 ease-in-out"
                                    >
                                        <div className="bg-black flex items-center p-3 w-14 h-14 justify-center rounded-full">
                                            <img src={company.logo} alt="company_1" />
                                        </div>
                                        <p className="font-semibold">{ company.name }</p>
                                        <p className="text-gray-500 dark:text-gray-100 text-xs">{ company.description }</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                ) : pageToDisplay == 1 ? (

                    <div className="flex gap-16 flex-col relative items-center justify-center h-full w-full">
                        {/*  */}
                        <div onClick={() => setPageToDisplay(pageToDisplay-1)} className="bg-gray-200 absolute top-10 left-10 px-2 rounded-md py-1 cursor-pointer">precedent</div>
                        {/*  */}
                        <h1 className="font-semibold text-usual-green text-5xl">Gestion des utilisateurs</h1>

                        <div className="flex gap-4">
                            <div className={`absolute top-0 overflow-scroll right-0 z-50 w-screen h-screen rounded-full bg-gray-100 dark:bg-dark-purple ${isDisplayAddUserPopUp ? "scale-100 rounded-none" : "scale-0"} transition-all duration-300 ease-out`}>
                                <div onClick={() => setIsDisplayAddUserPopUp(false)} className="bg-gray-300 flex ab justify-center items-center rounded-full absolute right-10 top-10 w-8 h-8 cursor-pointer">
                                    <p className="text-xl">&times;</p>
                                </div>
                                <AddUser />
                            </div>
                            <div className={`absolute top-0 overflow-scroll right-0 z-50 w-screen h-screen rounded-full bg-gray-100 dark:bg-dark-purple ${isDisplayManageUserPopUp ? "scale-100 rounded-none" : "scale-0"} transition-all duration-300 ease-out`}>
                                <div onClick={() => setIsDisplayManageUserPopUp(false)} className="bg-gray-300 flex ab justify-center items-center rounded-full absolute right-10 top-10 w-8 h-8 cursor-pointer">
                                    <p className="text-xl">&times;</p>
                                </div>
                                <ManageUser />
                            </div>
                            {/*  */}
                            <div onClick={() => setIsDisplayAddUserPopUp(true)} className="containerEffect overflow-hidden relative flex flex-col items-center justify-center cursor-pointer border rounded-md p-4 w-44 h-52">
                                <div className="relative z-10 flex flex-col text-center justify-center items-center">
                                    <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full p-2">
                                        <p className="rotate-45 text-black text-4xl w-fit h-fit">&times;</p>
                                    </div>
                                    <p>Ajouter un utilisateur</p>
                                </div>
                                <div className="hoverContainerEffect transition-all duration-300 ease-in-out absolute rounded-md bg-dark-purple dark:bg-dark-bg-color w-full h-full"></div>
                            </div>
                            {/*  */}
                            <div onClick={() => setIsDisplayManageUserPopUp(true)} className="containerEffect overflow-hidden relative flex flex-col items-center justify-center cursor-pointer border rounded-md p-4 w-44 h-52">
                                <div className="relative z-10 flex flex-col text-center justify-center items-center">
                                    <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full p-2">
                                        <img className="w-full h-full" src="/icons/cpu.svg" alt="settings" />
                                    </div>
                                    <p>Gerer les utilisateurs</p>
                                </div>
                                <div className="invertHoverContainerEffect transition-all duration-300 ease-in-out absolute rounded-md bg-dark-purple dark:bg-dark-bg-color w-full h-full"></div>
                            </div>
                            {/*  */}
                        </div>

                    </div>

                ) : (

                    <div className="p-16 flex flex-col gap-8">
                        <Header />
                        {/* <ManageCompany /> */}
                    </div>

                )
            }
        </div>
    )
}

export default UserManagement;