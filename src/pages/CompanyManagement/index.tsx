import Header from "../../components/Header";
import AddCompany from "./AddCompany";
import "./index.css"
import { useState } from "react";
import ManageCompany from "./ManageComapny";


function CompanyManagement() {

    const [pageToDisplay, setPageToDisplay] = useState(0);


    function switchPage(page: number) {
        setPageToDisplay(page);
    }


    return (
        <div className="flex gap-16 flex-col w-full h-screen overflow-scroll">
            {
                pageToDisplay == 0 ? (

                    <div className="flex gap-16 flex-col items-center justify-center h-full w-full">
                        <h1 className="font-semibold text-usual-green text-5xl">Gestion des copagnies</h1>
                        <div className="flex gap-4">
                            <div onClick={() => switchPage(1)} className="containerEffect overflow-hidden relative flex flex-col items-center justify-center cursor-pointer border rounded-md p-4 w-44 h-52">
                                <div className="relative z-10 flex flex-col text-center justify-center items-center">
                                    <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full p-2">
                                        <p className="rotate-45 text-black text-4xl w-fit h-fit">&times;</p>
                                    </div>
                                    <p>Ajouter une compagnie</p>
                                </div>
                                <div className="hoverContainerEffect transition-all duration-300 ease-in-out absolute rounded-md bg-dark-purple dark:bg-dark-bg-color w-full h-full"></div>
                            </div>
                            <div onClick={() => switchPage(2)} className="containerEffect overflow-hidden relative flex flex-col items-center justify-center cursor-pointer border rounded-md p-4 w-44 h-52">
                                <div className="relative z-10 flex flex-col text-center justify-center items-center">
                                    <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full p-2">
                                        <img className="w-full h-full" src="/icons/cpu.svg" alt="settings" />
                                    </div>
                                    <p>Parametrer mes compagnies</p>
                                </div>
                                <div className="invertHoverContainerEffect transition-all duration-300 ease-in-out absolute rounded-md bg-dark-purple dark:bg-dark-bg-color w-full h-full"></div>
                            </div>
                        </div>
                    </div>

                ) : pageToDisplay == 1 ? (

                    <div className="p-16 flex flex-col gap-8">
                        <Header />
                        <AddCompany />
                    </div>

                ) : (

                    <div className="p-16 flex flex-col gap-8">
                        <Header />
                        <ManageCompany />
                    </div>

                )
            }
        </div>
    )
}

export default CompanyManagement;