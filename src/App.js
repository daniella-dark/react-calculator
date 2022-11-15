import React from 'react';
import { useSelector } from 'react-redux';

import BackButton from './components/BackButton';
import ClearButton from './components/ClearButton';
import NegativeButton from './components/NegativeButton';
import NumberButtons from './components/NumberButtons';
import OperatorButtons from './components/OperatorButtons';

import './scss/app.scss';
import Toggle from './components/Toggle';

function App() {
  const number = useSelector((state) => state.number.number);
  const storedNumber = useSelector((state) => state.number.storedNumber);
  const functionOperator = useSelector((state) => state.number.functionOperator);

  const displayRef = React.useRef();

  React.useEffect(() => {
    if (number.length > 8) {
      displayRef.current.style.fontSize = `${(316 / number.length) * 1.5}px`;
    } else displayRef.current.style.fontSize = `${60}px`;
  }, [number]);

  React.useEffect(() => {
    if (storedNumber.length > 8) {
      displayRef.current.style.fontSize = `${(316 / storedNumber.length) * 1.5}px`;
    } else displayRef.current.style.fontSize = `${60}px`;
  }, [storedNumber]);

  return (
    <div className="wrapper">
      <Toggle />
      <div className="calculator">
        <div className="calculator-display">
          <h3>{`${storedNumber} ${functionOperator} ${number}`}</h3>
          <h1 ref={displayRef}>{!number.length && !storedNumber ? '0' : number || storedNumber}</h1>
        </div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <ClearButton />
              <BackButton />
              <NegativeButton />
            </div>
            <div className="digit-keys">
              <NumberButtons />
            </div>
          </div>
          <div className="operator-keys">
            <OperatorButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
