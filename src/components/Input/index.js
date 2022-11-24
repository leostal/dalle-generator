import "./TextInput.scss"

const TextInput = (props) => {
    return (
        <form className="form">
            <textarea className="textarea" {...props}/>
        </form>
    )
}

export default TextInput;