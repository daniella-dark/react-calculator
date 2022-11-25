import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { numberSelector } from '../redux/number/selectors';
import { doMath, handleSetCalcFunction } from '../redux/number/slice';

const operatorKeys: string[] = ['/', '*', '-', '+', '='];

const OperatorButton: React.FC = () => {
  const {number, storedNumber} = useSelector(numberSelector)
  const dispatch = useDispatch()

  const calculate = (operator: string) => {
    if (number !== '' && storedNumber !== '') {
      dispatch(doMath(operator))
    } else {
      if (operator !== '=') {
        dispatch(handleSetCalcFunction(operator))
        if (storedNumber) {
          dispatch(doMath(operator))
        }
      }
    }
  }

  return (
    <>
      {
        operatorKeys.map((operator, index) =>
          <button
            key={index}
            onClick={() => calculate(operator)}
            className={`operator-key ${operator === '=' ? 'key-equals' : ''}`}
          >
            {operator}
          </button>
        )
      }
    </>
  )
}

export default OperatorButton
