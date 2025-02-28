import { useRef, useState } from "react";
import CustomInputText from "../../components/common/CustomInputText";
import CustomtextArea from "../../components/common/CustomTextArea";
import { Button } from "primereact/button";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import CustomInputNumber from "../../components/common/CustomInputNumber";
import UploadData from "./UploadData";
import API from "../../utils/API";


function AddCompany() {

    const stepperRef = useRef(null)
    const [categoriesList, setCategoriesList] = useState(
        [
            {
                id: 1,
                name: "Hotel",
                isSelected: true,
                logo: "/icons/company_1.svg"
            },
            {
                id: 2,
                name: "Restaurant",
                isSelected: false,
                logo: "/icons/company_2.svg"
            },
            {
                id: 3,
                name: "Garage",
                isSelected: false,
                logo: "/icons/company_3.svg"
            }
        ]
    )

    const [companyConfiguration, setCompanyConfiguration] = useState({
        voice_settings: {
            voice_url: "",
            voice_type: "synthesized"
        },
        specfic_configurations: ""
    })
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState({
        phone_number: "",
        secondary_phone_number: "",
        twilio_phone_number: ""
    })
    const [companyData, setCompanyData] = useState({
        owner_id: "",
        name: "",
        description: "",
        category: categoriesList[0].id,
        numbers: companyPhoneNumber,
        users: [],
        configurations: companyConfiguration,
        option: ""
    })

    function selectCompanyCategory(categoryId: number) {
        categoriesList.forEach((category) => {
            if (category.id === categoryId) {
                category.isSelected = true;
                companyData.category = category.id.toString();
            } else {
                category.isSelected = false;
            }
        });
        setCategoriesList([...categoriesList]);
    }

    async function getTwilioNumber() {
        const api = new API();
        api.getData(api.apiUrl + "/generateTwilioNumber")
            .then((res) => {
                companyPhoneNumber.twilio_phone_number = res.generatedNumber;
            }).catch((err) => {
                throw new Error(err);
            })
    }

    async function handleSubmit() {
        const api = new API()

        api.postData(api.apiUrl + "/company/new", companyData, null, false)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                throw new Error(err);
            })
    }

    const handleChangeCompanyData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCompanyData({ ...companyData, [e.target.name]: e.target.value });
    };
    // const handleChangeCompanyConfiguration = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setCompanyConfiguration({ ...companyConfiguration, [e.target.name]: e.target.value });
    // };
    const handleChangeCompanyPhoneNumber = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCompanyPhoneNumber({ ...companyPhoneNumber, [e.target.name]: e.target.value });
    };

    return (
        <form className="flex flex-col gap-16" onSubmit={(e) => e.preventDefault()}>
            <div className="w-full flex justify-center items-center">
                <h1 className="font-semibold text-4xl">Ajout de compagnie</h1>
            </div>
            <Stepper ref={stepperRef} orientation="horizontal">
                <StepperPanel header="Informations generales">
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-4">
                            <p>Type de compagnie</p>
                            <div className="flex gap-4">
                                {
                                    categoriesList.map((category) => (
                                        <div key={category.id} onClick={() => selectCompanyCategory(category.id)} className={`${category.isSelected ? "border border-[#05A9C6]" : ""} flex flex-col gap-2 w-32 h-32 cursor-pointer rounded-md items-center justify-center`}>
                                            <div className="bg-dark-purple p-2 flex items-center justify-center rounded-full">
                                                <img src={category.logo} alt="logo" />
                                            </div>
                                            <p>{category.name}</p>
                                        </div>
                                    ))
                                }
                                <div onClick={() => null} className="bg-gray-200 dark:bg-dark-bg-color flex flex-col gap-2 w-32 h-32 cursor-pointer rounded-md items-center justify-center">
                                    <p>Autres</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>Caracteristiques</p>
                            <div className="flex flex-row-reverse gap-8 w-full">
                                <CustomtextArea
                                    classProperty="w-full flex flex-col gap-2"
                                    label="Description de la compagnie"
                                    placeholder="Nom de la compagnie"
                                    value={companyData.description}
                                    onChanges={(e) => handleChangeCompanyData({ ...e, target: { ...e.target, name: "description" } })}
                                />
                                <div className="border border-gray-200"></div>
                                <div className="flex flex-col gap-4 w-full">
                                    <CustomInputText
                                        classProperty="w-full flex flex-col gap-2"
                                        label="Nom de la compagnie"
                                        placeholder="Nom de la compagnie"
                                        value={companyData.name}
                                        onChanges={(e) => handleChangeCompanyData({ ...e, target: { ...e.target, name: "name" } })}
                                    />
                                    <CustomInputNumber
                                        classProperty="w-full flex flex-col gap-2"
                                        label="Numero de telephone pricipal"
                                        placeholder="Numero de telephone pricipal"
                                        value={companyPhoneNumber.phone_number}
                                        onChanges={(e) => handleChangeCompanyPhoneNumber({ ...e, target: { ...e.target, name: "phone_number" } })}
                                    />
                                    <CustomInputNumber
                                        classProperty="w-full flex flex-col gap-2"
                                        label="Numero de telephone secondaire"
                                        placeholder="Numero de telephone secondaire"
                                        value={companyPhoneNumber.secondary_phone_number}
                                        onChanges={(e) => handleChangeCompanyPhoneNumber({ ...e, target: { ...e.target, name: "secondary_phone_number" } })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex py-4">
                        {
                            companyData.name && companyPhoneNumber.phone_number && companyData.description && companyData.category
                            ? <Button label="Next" icon="pi pi-arrow-right" className="bg-usual-green border-usual-green" iconPos="right" onClick={() => {
                                stepperRef?.current.nextCallback();
                                getTwilioNumber();
                            }} />
                            : <Button label="Next" icon="pi pi-arrow-right" className="bg-gray-400 border-gray-400" iconPos="right" onClick={() => null} />
                        }
                    </div>
                </StepperPanel>
                <StepperPanel header="Informations messageries">
                    <div className="flex gap-4 w-full">
                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex flex-col gap-2">
                                <p>Ceci est le numero vers lequel les appel vers votre numero seront rediriges</p>
                                <div className="border bg-gray-200 font-semibold h-10 rounded-md flex items-center px-4">{companyPhoneNumber.twilio_phone_number}</div>
                            </div>
                            <CustomtextArea
                                classProperty="w-full h-64 flex flex-col gap-2"
                                label="Workflow client"
                                placeholder="Description du workflow de d'accueil des client"
                                value={companyData.option}
                                onChanges={(e) => handleChangeCompanyData({ ...e, target: { ...e.target, name: "option" } })}
                            />
                        </div>
                        <div className="border border-gray-200"></div>
                        <div className="flex flex-col w-full gap-4">
                            <p>Ajouter des fichiers contenants desinformaton sur votre compagnie</p>
                            <UploadData />
                        </div>
                    </div>
                    <div className="flex py-4 gap-4">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef?.current.prevCallback()} />
                        {
                            companyPhoneNumber.twilio_phone_number
                            ? <div className="bg-usual-green flex items-center justify-center w-fit h-13 text-white rounded-md px-4 hover:bg-usual-green/80 cursor-pointer" onClick={() => handleSubmit()}><p>Enregistrer</p></div>
                            : <div className="bg-gray-400 flex items-center justify-center w-fit h-13 text-white rounded-md px-4 cursor-pointer"><p>Enregistrer</p></div>
                        }
                    </div>
                </StepperPanel>
            </Stepper>
        </form>
    )
}

export default AddCompany;