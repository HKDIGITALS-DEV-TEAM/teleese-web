

function CustomInputText({
    label,
    placeholder,
    value,
    onChanges,
    classProperty,
    imputProprerty,
} : {
    label: string;
    placeholder: string;
    value?: string;
    onChanges?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    classProperty?: string;
    imputProprerty?: string;

})  {
    return (
        <div className={classProperty}>
            <label htmlFor="">{label}</label>
            <input required={true} value={value} onChange={(e) => onChanges!(e)} type="text" name="" id="" placeholder={placeholder} className={"px-4 bg-dark  outline-dark-bg-color h-10 rounded-lg w-full border outline-primary " + imputProprerty} />
        </div>
    )
}

export default CustomInputText;