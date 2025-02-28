import { DataTable } from "primereact/datatable";
import Header from "../../components/Header";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Dropdown } from "primereact/dropdown";
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";

function ManageUser() {

    const memberData = [
        {
            id: 1,
            companyId: 1,
            name: "FOKO KENMOGNE Wilfried",
            profile: "/images/profile.png",
            role: ["admin", "manager", "member"],
            description: "text",
            phone_number: "0601020304",
            email: "fokowilfried7@gmail.com"
        },
        {
            id: 1,
            companyId: 1,
            name: "FOKO KENMOGNE Wilfried",
            profile: "/images/profile.png",
            role: ["admin", "manager", "member"],
            description: "text",
            phone_number: "0601020304",
            email: "fokowilfried7@gmail.com"
        },
    ]

    const statusBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2 flex-wrap">
                {
                    rowData.role.map((role: string, _i: number) => (
                        <Tag className="bg-light-purple text-black font-medium" key={_i} value={role?.toLowerCase()} severity={"info"}></Tag>
                    ))
                }
            </div>
        )
    };

    const actionBodyTemplate = () => {
        return (
            <div className="flex flex-nowrap">
                <Button icon="pi pi-pencil" className="w-8 h-8 mr-2" onClick={() => console.log('edit')}></Button>
                <Button icon="pi pi-trash" className="w-8 h-8 bg-red-800 border-none mr-2" onClick={() => console.log('delete')}></Button>
                {/* <Button icon="pi pi-eye" onClick={() => console.log('view')}></Button> */}
            </div>
        )
    };

    const userInformationBodyTemplate = (rowDate) => {
        return (
            <div className="flex gap-2 items-center">
                <div className="rounded-full w-8 h-8 overflow-hidden">
                    <img src={rowDate.profile} alt="/rpofile" />
                </div>
                <div>
                    <p className="text-sm font-semibold">{ rowDate.name }</p>
                    <p className="text-xs text-gray-400">{ rowDate.description }</p>
                </div>
            </div>
        )
    }

    const paginatoTemplate = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round text-black dark:text-light-purple')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round text-black dark:text-light-purple')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return (
                    <span className={className} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className + "bg-dark-purple dark:bg-light-purple text-dark-purple"} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
    }


    return (
        <div className="p-16 flex flex-col gap-16">
            <Header />
            <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-usual-green">Gestion des utilisateurs</h1>
            </div>
            <div className="">
                <div>
                    <DataTable
                        v-model:selection="selectedItem"
                        className="rounded-md border px-2"
                        paginatorClassName="bg-gray-100 dark:bg-dark-purple"
                        value={memberData}
                        selection-mode="single"
                        data-key="id"
                        table-style="min-width: 50rem"
                        emptyMessage="No member found."
                        paginator rows={10}
                        paginatorTemplate={paginatoTemplate}
                    >
                        <Column bodyClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" headerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" footerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" field="name" header="Nom" body={userInformationBodyTemplate} className="" ></Column>
                        <Column bodyClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" headerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" footerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" field="role" header="Role" body={statusBodyTemplate} ></Column>
                        <Column bodyClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" headerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" footerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" field="phone_number" header="Numero"></Column>
                        <Column bodyClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" headerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" footerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" field="email" header="Email"></Column>
                        <Column bodyClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" headerClassName="bg-gray-100 dark:bg-dark-purple dark:text-white" footerClassName="bg-light-purple dark:bg-dark-purple dark:text-white" field="action" header="Actions" body={actionBodyTemplate} ></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    )
}

export default ManageUser;