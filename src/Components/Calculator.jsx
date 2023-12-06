
import  { useState } from 'react';
import Button from './Button';
import '../Style.css'

const Calculator = () => {
  const [result, setResult] = useState('');

   const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '+', '=','C'
  ];

  const buttonRows = [];
  let row = [];

  buttons.forEach((buttonValue, index) => {
    row.push(
      <Button
        key={buttonValue}
        value={buttonValue}
        handleClick={handleClick}
      />
    );

    if ((index + 1) % 4 === 0 || index === buttons.length - 1) {
      buttonRows.push(
        <div key={index} className="button-row">
          {row}
        </div>
      );
      row = [];
    }
  });

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />
      <div className="buttons">
        {buttonRows}
      </div>
    </div>
  );
};

export default Calculator;
