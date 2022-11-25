import React from 'react'
import { useDispatch } from 'react-redux'
import { handleSetDisplayValue } from '../redux/number/slice'

const digitKeys: (string)[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

const NumberButton: React.FC = () => {

  const dispatch = useDispatch()

  return (
    <>
      {
        digitKeys.map((digit, index) =>
          <button
            key={index}
            className={digit === '0' ? 'digit-key key-0' : 'digit-key'}
            onClick={() => dispatch(handleSetDisplayValue(digit))}
          >
            {digit}
          </button>
        )
      }
    </>
  )
}

export default NumberButton
