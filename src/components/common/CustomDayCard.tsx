

function CustomDayCard() {

    const isSelected = true;

    return (
        <div className="flex items-center justify-center">
            <div className={`flex flex-col justify-between items-center py-4 ${isSelected ? "bg-dark-purple text-white" : "bg-light-purple"} h-32 w-24 rounded-lg cursor-pointer`}>
                <p className="text-xl font-medium">04</p>
                <p className="text-lg font-medium">Mer</p>
            </div>
        </div>
    )
}

export default CustomDayCard;