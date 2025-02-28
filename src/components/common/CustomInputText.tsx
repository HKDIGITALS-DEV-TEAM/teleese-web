

function CustomInputText({
    label,
    placeholder,
    value,
    onChanges,
    classProperty,

} : {
    label: string;
    placeholder: string;
    value?: string;
    onChanges?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    classProperty  : string;

})  {
    return (
        <div className={classProperty}>
            <label htmlFor="">{label}</label>
            <input required={true} value={value} onChange={(e) => onChanges!(e)} type="text" name="" id="" placeholder={placeholder} className="px-4 bg-dark  outline-dark-bg-color h-10 rounded-lg w-full border outline-primary" />
        </div>
    )
}

export default CustomInputText;