import '../Style.css'
const Button = ({ handleClick, value }) => {
    return (
      <button onClick={() => handleClick(value)}>
         {value}
      </button>
    );
  };
  
  export default Button;
