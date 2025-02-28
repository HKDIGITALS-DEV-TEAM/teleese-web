import "./index.css";
import CustomInputText from "../../components/common/CustomInputText";
import CustomtextArea from "../../components/common/CustomTextArea";
import Header from "../../components/Header";
import { useState } from "react";
import CustomInputNumber from "../../components/common/CustomInputNumber";
import CustomInputEmail from "../../components/common/CustomInputEmail";


function AddUser({ companyId } : { companyId?: string }) {

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        phone_number: "",
        email: "",
        role: "member",
        description: "",
        companyId: companyId
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleSubmit() {
        console.log(formData);
    }

    return (
        <div className="p-16 flex flex-col gap-16">
            <Header />
            <div className="flex justify-center">
                <h1 className="text-4xl font-semibold">Ajouter une utilisateur</h1>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit()
                }}
                className="flex flex-col gap-2 items-center w-full"
            >
                <CustomInputText label={""} value={formData.name} onChanges={(e) => handleChange({ ...e, target: { ...e.target, name: "name" }})} placeholder={"Nom"} classProperty={"w-full"} />
                <CustomInputText label={""} value={formData.lastName} onChanges={(e) => handleChange({ ...e, target: { ...e.target, name: "lastName" }})} placeholder={"prenom"} classProperty={"w-full"} />
                <CustomInputNumber label={""} value={formData.phone_number} onChanges={(e) => handleChange({ ...e, target: { ...e.target, name: "phone_number" }})} placeholder={"Numero"} classProperty={"w-full"} />
                <CustomInputEmail label={""} value={formData.email} onChanges={(e) => handleChange({ ...e, target: { ...e.target, name: "email" }})} placeholder={"Email"} classProperty={"w-full"} />
                <div className="px-4 bg-dark bg-light-purple outline-dark-bg-color h-10 rounded-lg w-full border dark:text-black outline-primary flex items-center">RealVisXL</div>
                <div className="flex flex-col gap-2 py-4">
                    <p className="text-gray-500">Role</p>
                    <div className="flex gap-8">
                        <div className="inputRadio">
                            <label htmlFor="admin">Administrateur</label>
                            <input onChange={(e) => formData.role = e.target.value} type="radio" name="role" value="admin" id="admin" />
                        </div>
                        <div className="inputRadio">
                            <label htmlFor="member">Membre</label>
                            <input onChange={(e) => formData.role = e.target.value} type="radio" name="role" value="member" id="member" />
                        </div>
                    </div>
                </div>
                <CustomtextArea label={""} value={formData.description} onChanges={(e) => handleChange({ ...e, target: { ...e.target, name: "description" }})} placeholder={"Description"} classProperty={"w-full"} />
                <input type="submit" value={"Ajouter"} className="bg-usual-green text-white flex items-center justify-center w-fit h-12 texManageCompanyt-white rounded-full px-24 cursor-pointer" />
            </form>
        </div>
    )
}

export default AddUser;