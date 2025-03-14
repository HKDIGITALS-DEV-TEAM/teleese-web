import { NavLink } from "react-router-dom";


function Authentication() {
    return (
        <div className="flex flex-col gap-16 justify-center items-center w-full h-full">
            <div className="flex flex-col items-center gap-8">
                <img className="w-52 h-52" src="/icons/teleese_logo.svg" alt="logos" />
                <h1 className="text-6xl font-bold"><span className="text-usual-green">Salut!</span> je suis Teleese</h1>
            </div>
            <div className="flex flex-col gap-4 w-96">
                <NavLink className={"py-4 text-white font-semibold bg-usual-green hover:bg-usual-green/80 flex justify-center items-center transition-all duration-150 ease-in-out rounded-full"} to={"/sign_in"}>Creeer un compte</NavLink>
                <NavLink className={"py-4 text-white font-semibold bg-usual-blue hover:bg-usual-blue/80 flex justify-center items-center transition-all duration-150 ease-in-out rounded-full"} to={"/login"}>Connexion</NavLink>
            </div>
        </div>
    )
}

export default Authentication;