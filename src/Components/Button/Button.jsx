import './Button.css';

function Button({buttonType, name, isDisabled, action}) {

    return (
        <div>
            <button
                className={isDisabled ? "button-disabled" : "button-enabled"}
                type={buttonType}
                disabled={isDisabled}
                onClick={action}
            >{name}</button>
        </div>
    )
}



export default Button


