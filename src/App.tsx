import React from 'react';
import { useSelector } from 'react-redux';

import BackButton from './components/BackButton';
import ClearButton from './components/ClearButton';
import NegativeButton from './components/NegativeButton';
import NumberButtons from './components/NumberButtons';
import OperatorButtons from './components/OperatorButtons';

import './scss/app.scss';
import Toggle from './components/Toggle';
import { numberSelector } from './redux/number/selectors';
import { ColorBox } from './components/ColorBox';

const App: React.FC = () => {
  const { number, storedNumber, functionOperator } = useSelector(numberSelector);

  const displayRef = React.useRef<HTMLHeadingElement>(null);
  
  React.useEffect(() => {
    displayRef.current && (number.length > 8
      ? displayRef.current.style.fontSize = `${(316 / number.length) * 1.5}px`
      : displayRef.current.style.fontSize = `${60}px`)
  }, [number]);

  React.useEffect(() => {
    displayRef.current && (storedNumber.length > 8
      ? displayRef.current.style.fontSize = `${(316 / storedNumber.length) * 1.5}px`
      : displayRef.current.style.fontSize = `${60}px`)
  }, [storedNumber]);

  return (
    <div className="wrapper">
      <div className='overlay' />
      <div style={{ width: 376, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
        <Toggle />
        <ColorBox />
      </div>
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
