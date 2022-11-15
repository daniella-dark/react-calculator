import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleSetDisplayValue } from '../redux/slices/numberSlice'

const NumberButton = () => {
  const digitKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

  const dispatch = useDispatch()

  const number = useSelector(state => state.number)
  console.log(number);

  return (
      digitKeys.map((digit, index) => 
      <button key={index} className={digit === 0 ? 'digit-key key-0' : 'digit-key'} onClick={() => dispatch(handleSetDisplayValue(digit))}>{digit}</button>)
  )
}

export default NumberButton
