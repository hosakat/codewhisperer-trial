import { useState } from 'react';

// React component that renders a simple integer calculator
// supporting addition, subtraction, multiplication and division.
//
// example:
//   <CalculatorPage />
export function CalculatorPage() {
  return (
    <div className="calculator-page">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

// calculator has following buttons:
//  0 1 2 3 4 5 6 7 8 9
//  + - * / = AC
// and displays the result of the calculation corresponding to the number and operator pressed
const Calculator = () => {
  // component state:
  //    first: string; first value for calculations, use setFirst to change
  //    lastOperand: string; last operand for calculations, use setLastOperand to change
  //    second: string; second value for calculations, use setSecond to change
  //    result: string; result of calculations, use setResult to change
  const [first, setFirst] = useState(0);
  const [lastOperand, setLastOperand] = useState('');
  const [second, setSecond] = useState(0); // second value for calculations, use setSecond to change
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState<number | string>(0);

  // Perform calculations according to the specified operand
  // example:
  //  if operand is "+" then add first and second values and set result
  //  if operand is "-" then subtract first and second values and set result
  //  if operand is "*" then multiply first and second values and set result
  //  if operand is "/" then divide first and second values and set result
  //  if operand is "=" then set result to first value
  const calculate = (operand: string) => {
    switch (operand) {
      case '+':
        setResult(first + second);
        return first + second;
      case '-':
        setResult(first - second);
        return first - second;
      case '*':
        setResult(first * second);
        return first * second;
      case '/':
        setResult(first / second);
        return first / second;
      default:
        setResult(first);
        return first;
    }
  };

  // invoked when clear button is clicked
  const clear = () => {
    setFirst(0);
    setLastOperand('');
    setSecond(0);
    setResult(0);
    setDisplay(0);
  };

  // invoked when a digit button is clicked
  const handleDigitClick = (digit: number) => {
    setResult(0);
    setSecond(digit);
    setDisplay(digit);
  };

  // invoked when an operand button is clicked
  const handleOperandClick = (operand: string) => {
    if (lastOperand) {
      setFirst(calculate(lastOperand));
    } else if (result) {
      setFirst(result);
    } else {
      setFirst(second);
    }
    setLastOperand(operand);
    setSecond(0);
    setResult(0);
    setDisplay(operand);
  };

  // invoked when the equals button is clicked
  const handleEqualsClick = () => {
    if (lastOperand) {
      setResult(calculate(lastOperand));
      setDisplay(calculate(lastOperand));
    } else if (second) {
      setResult(second);
      setDisplay(second);
    }
    setFirst(0);
    setLastOperand('');
    setSecond(0);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="digits">
        <button onClick={() => handleDigitClick(0)}>0</button>
        <button onClick={() => handleDigitClick(1)}>1</button>
        <button onClick={() => handleDigitClick(2)}>2</button>
        <button onClick={() => handleDigitClick(3)}>3</button>
        <button onClick={() => handleDigitClick(4)}>4</button>
        <button onClick={() => handleDigitClick(5)}>5</button>
        <button onClick={() => handleDigitClick(6)}>6</button>
        <button onClick={() => handleDigitClick(7)}>7</button>
        <button onClick={() => handleDigitClick(8)}>8</button>
        <button onClick={() => handleDigitClick(9)}>9</button>
      </div>
      <div className="operators">
        <button onClick={() => handleOperandClick('+')}>+</button>
        <button onClick={() => handleOperandClick('-')}>-</button>
        <button onClick={() => handleOperandClick('*')}>*</button>
        <button onClick={() => handleOperandClick('/')}>/</button>
        <button onClick={() => handleEqualsClick()}>=</button>
        <button onClick={() => clear()}>AC</button>
      </div>
    </div>
  );
};
