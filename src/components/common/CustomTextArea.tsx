

function CustomtextArea({
    label,
    placeholder,
    value,
    onChanges,
    classProperty,

} : {
    label: string;
    placeholder: string;
    value?: string;
    onChanges?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    classProperty  : string;

})  {
    return (
        <div className={classProperty}>
            <label htmlFor="">{label}</label>
            <textarea required={true} value={value} onChange={(e) => onChanges!(e)} name="" id="" placeholder={placeholder} className="px-4 bg-dark py-2  h-full resize-none outline-dark-bg-color rounded-lg w-full border outline-primary" />
        </div>
    )
}

export default CustomtextArea;