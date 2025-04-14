import React, { useState } from 'react';
import './App.css';
import { addHex, subtractHex, multiplyHex, divideHex } from './arithmeticLogic';

const buttons = [
    'A', 'B', 'C', '+',
    'D', 'E', 'F', '-',
    '9', '8', '7', '*', 
    '6', '5', '4', '/',
    '3', '2', '1', '=',
    '0', 'Clear'
  ];
  
  

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'Clear') {
      setDisplay('');
    } else if (value === '=') {
        const result = calculate(display);
        setDisplay(result);
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const calculate = (expression) => {
    const [a, operator, b] = expression.split(/([+\-*/])/);
  
    if (!a || !b || !operator) return 'ERROR';
  
    switch (operator) {
      case '+':
        return addHex(a, b);
      case '-':
        return subtractHex(a, b);
      case '*':
        return multiplyHex(a, b);
      case '/':
        return divideHex(a, b);
      default:
        return 'ERROR';
    }
  };
  
  return (
    <div className="calculator">
      <div className="display" data-testid="display">{display}</div>
      <div className="buttons">
      {buttons.map((btn, idx) => (
        <button
            key={`${btn}-${idx}`}
            onClick={() => handleClick(btn)}
            data-testid={`btn-${btn}`}
        >
            {btn}
        </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
