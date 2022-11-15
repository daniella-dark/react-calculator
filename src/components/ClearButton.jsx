import React from 'react'
import { useDispatch } from 'react-redux'
import { clearDisplayValue } from '../redux/slices/numberSlice'

const ClearButton = () => {
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
