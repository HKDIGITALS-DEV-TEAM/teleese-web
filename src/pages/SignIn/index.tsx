import { useState } from "react";
import CustomInputText from "../../components/common/CustomInputText";
import { NavLink } from "react-router-dom";


function SignIn() {

    const [userdata, setUserdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",

    })

    const handleChangeUserData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log(userdata);
    }

    return (
        <div className="flex flex-col gap-16 justify-center items-center w-full h-full">
            <div className="flex flex-col items-center gap-8">
                <img className="w-52 h-52" src="/icons/teleese_logo.svg" alt="logos" />
                <h1 className="text-4xl font-bold">Creer un compte</h1>
            </div>
            <div className=" flex flex-col gap-4 w-96">
                <CustomInputText label="Nom" placeholder="Entrez votre nom" value={userdata.firstName} onChanges={(e) => handleChangeUserData({ ...e, target: { ...e.target, name: "firstName" } })} imputProprerty={"!rounded-full bg-light-purple !py-6"} classProperty=" flex flex-col gap-2" />
                <CustomInputText label="Prenom" placeholder="Entrez votre prenom" value={userdata.lastName} onChanges={(e) => handleChangeUserData({ ...e, target: { ...e.target, name: "lastName" } })} imputProprerty={"!rounded-full bg-light-purple !py-6"} classProperty=" flex flex-col gap-2" />
                <CustomInputText label="Email" placeholder="Entrez votre email" value={userdata.email} onChanges={(e) => handleChangeUserData({ ...e, target: { ...e.target, name: "email" } })} imputProprerty={"!rounded-full bg-light-purple !py-6"} classProperty=" flex flex-col gap-2" />
                <CustomInputText label="Mot de passe" placeholder="Entrez votre mot de passe" value={userdata.password} onChanges={(e) => handleChangeUserData({ ...e, target: { ...e.target, name: "password" } })} imputProprerty={"!rounded-full bg-light-purple !py-6"} classProperty=" flex flex-col gap-2" />
                <div className="flex flex-col gap-4 w-96">
                    <div onClick={() => handleSubmit()} className={"py-4 text-white font-semibold bg-usual-green hover:bg-usual-green/80 flex justify-center items-center transition-all duration-150 ease-in-out rounded-full cursor-pointer"}>Creeer un compte</div>
                    <div>Vous avez deja un compte ? <NavLink className={"font-bold text-usual-green"} to={"/login"}>Connectez vous</NavLink></div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;