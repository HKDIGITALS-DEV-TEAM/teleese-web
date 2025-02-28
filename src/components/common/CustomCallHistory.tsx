

function CustomCallHistory() {
    return (
        <div>
            <div className="flex items-start gap-8">
                <p>08:10</p>
                <div className="w-full flex flex-col gap-8 mt-3">
                    <div className="border w-full h-0 dark:border-dark-purple"></div>
                    <div className="bg-usual-purple text-white p-4 rounded-xl cursor-pointer">
                        <p className="text-lg font-semibold">Digital Marketing</p>
                        <p className="text-sm w-80">Online marketing is the promotion of brands to connect</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomCallHistory;