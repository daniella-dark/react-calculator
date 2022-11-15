import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { doMath, handleSetCalcFunction } from '../redux/slices/numberSlice';

const OperatorButton = () => {
  const operatorKeys = ['/', '*', '-', '+', '='];
  const {number, storedNumber} = useSelector(state => state.number)
  const dispatch = useDispatch()

  const calculate = (operator) => {
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
    operatorKeys.map((operator, index) =>
      <button
        key={index}
        onClick={() => calculate(operator)}
        className={`operator-key ${operator === '=' ? 'key-equals' : ''}`}
      >
        {operator}
      </button>
    )
  )
}

export default OperatorButton
