import './button.css'

const Button = ({btnText}: {btnText:string}) => {
    return (
        
            <button className="button">{btnText}</button>
        
    );
};

export default Button;