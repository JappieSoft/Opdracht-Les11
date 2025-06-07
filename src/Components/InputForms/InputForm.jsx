function InputForm({name, title, children}) {
    return (
    <label htmlFor={title} className="formText">{name}:
        {children}
    </label>
)}

export default InputForm;