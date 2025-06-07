import "./Button.css";

function Button({buttonType, name, isDisabled, action}) {

    return (
            <button
                className={isDisabled ? "button-disabled" : "button-enabled"}
                type={buttonType}
                disabled={isDisabled}
                onClick={action}
            >{name}</button>
    )
}



export default Button


