import { useState } from "react";
import CustomInputText from "../../components/common/CustomInputText";
import CustomtextArea from "../../components/common/CustomTextArea";
import API from "../../utils/API";


function AddCompany() {

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
    const [isDisplayAnotherCategory, setIsDisplayAnotherCategory] = useState(true);

    const [companyData, setCompanyData] = useState({
        owner_id: "",
        name: "",
        description: "",
        category: categoriesList[0].id,
        numbers: null,
        users: [],
        configurations: null,
        option: ""
    })

    function selectCompanyCategory(categoryId: number) {
        categoriesList.forEach((category) => {
            if (category.id === categoryId) {
                category.isSelected = true;
                companyData.category = category.id;
            } else {
                category.isSelected = false;
            }
        });
        setCategoriesList([...categoriesList]);
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

    return (
        <form className="flex flex-col gap-16 items-center" onSubmit={(e) => e.preventDefault()}>
            {
                isDisplayAnotherCategory ?
                <div className="w-screen h-screen bg-black/30 fixed top-0 left-0 flex justify-center items-center">
                    <div className="w-96 py-10 p-8 flex gap-8 justify-center flex-col items-center bg-white rounded-lg">
                        <p className="text-2xl font-semibold">Entrer votre categorie</p>
                        <CustomInputText
                            classProperty="flex flex-col gap-2 w-full"
                            label="Categorie de la compagnie"
                            placeholder="Entrez votre catgorie"
                            value={""}
                            onChanges={(e) => handleChangeCompanyData({ ...e, target: { ...e.target, name: "" } })}
                        />
                        <div className="flex flex-col gap-4 w-full">
                            <div onClick={() => setIsDisplayAnotherCategory(false)} className={"py-2 text-white font-semibold bg-usual-green hover:bg-usual-green/80 flex justify-center items-center transition-all duration-150 ease-in-out rounded-full cursor-pointer"}>Valider</div>
                        </div>
                    </div>
                </div>
                :
                <div className="hidden"></div>
            }
            <div className="w-full flex justify-center items-center">
                <h1 className="font-semibold text-4xl">Ajout de compagnie</h1>
            </div>
            <div className="flex flex-col gap-16 items-center w-6/12">
                <div className="flex flex-col w-full gap-4">
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
                        <div onClick={() => setIsDisplayAnotherCategory(true)} className="bg-gray-200 dark:bg-dark-bg-color flex flex-col gap-2 w-32 h-32 cursor-pointer rounded-md items-center justify-center">
                            <p>Autres</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <p>Caracteristiques</p>
                    <div className="flex flex-col gap-8">
                        <CustomInputText
                            classProperty="w-full flex flex-col gap-2"
                            label="Nom de la compagnie"
                            placeholder="Nom de la compagnie"
                            value={companyData.name}
                            onChanges={(e) => handleChangeCompanyData({ ...e, target: { ...e.target, name: "name" } })}
                        />
                        <CustomtextArea
                            classProperty="w-full flex flex-col gap-2"
                            label="Description de la compagnie"
                            placeholder="Nom de la compagnie"
                            value={companyData.description}
                            onChanges={(e) => handleChangeCompanyData({ ...e, target: { ...e.target, name: "description" } })}
                        />
                        <div className="flex flex-col gap-4 w-full">
                            <div onClick={() => handleSubmit()} className={"py-4 text-white font-semibold bg-usual-green hover:bg-usual-green/80 flex justify-center items-center transition-all duration-150 ease-in-out rounded-full cursor-pointer"}>Creer la compagnie</div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddCompany;