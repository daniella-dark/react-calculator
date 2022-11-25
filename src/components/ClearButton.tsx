import React from 'react'
import { useDispatch } from 'react-redux'
import { clearDisplayValue } from '../redux/number/slice'

const ClearButton: React.FC = () => {
  const dispatch = useDispatch()
  
  return (
    <button
      onClick={() => dispatch(clearDisplayValue())}
      className='function-key key-clear'
    >
      AC
    </button>
  )
}

export default ClearButton
