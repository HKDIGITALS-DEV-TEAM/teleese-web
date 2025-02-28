

function CustomChatTextContainer({ content } : { content: string }) {

    return (
        <div className="border p-4 rounded-md max-w-[90%]">{ content }</div>
    )

}

export default CustomChatTextContainer;