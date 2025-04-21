
export const StreamKey = async (props) => {
    const { streamKey } = props
    return (
        <div className="settings-stream-key-container">
            <span> { streamKey } </span>
        </div>
    )
}