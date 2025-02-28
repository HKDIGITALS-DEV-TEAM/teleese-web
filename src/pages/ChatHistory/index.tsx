import "./index.css";
import CommonAudioPlayer from "../../components/common/CommonAudioPlayer";
import CustomCallHistory from "../../components/common/CustomCallHistory";
import CustomDayCard from "../../components/common/CustomDayCard";
import audioFile from "/op3.mp3";
import CustomChatTextContainer from "../../components/common/CustomChatTextContainer";


function ChatHistory() {
    return (
        <div className="flex gap-16 p-16 w-full overflow-scroll h-screen">
            <div className="w-full flex flex-col gap-8">
                <div className="w-fit p-2 rounded-full flex justify-center bg-black items-center">
                    <img src="/icons/company_1.svg" alt="" />
                </div>
                <h2 className="text-4xl font-semibold">Messages du jour</h2>
                <div className="flex flex-col gap-4">
                    <CommonAudioPlayer voice={audioFile} />
                    <div className="right-text"> <CustomChatTextContainer content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit expedita impedit quisquam tenetur quos, enim eaque qui dicta labore asperiores illo numquam quod, dolores recusandae cum deleniti vitae odio ullam!" /> </div>
                    <CommonAudioPlayer voice={audioFile} />
                    <CommonAudioPlayer voice={audioFile} />
                    <CommonAudioPlayer voice={audioFile} />
                </div>
            </div>
            <div className="w-full shadow-lg rounded-md h-full p-8 flex flex-col gap-10 dark:bg-dark-bg-color text-black">
                <h2 className="text-3xl font-semibold">Historique des messages</h2>
                <div className="flex gap-8">
                    <CustomDayCard />
                    <CustomDayCard />
                    <CustomDayCard />
                    <CustomDayCard />
                    <CustomDayCard />
                </div>
                <div className="border border-gray-200"></div>
                <div className="flex flex-col gap-4 h-full overflow-scroll px-4">
                    <CustomCallHistory />
                    <CustomCallHistory />
                </div>
            </div>
        </div>
    )
}

export default ChatHistory;