import React from 'react'
import {useDispatch} from 'react-redux'
import { handleToggleNegative } from '../redux/slices/numberSlice'

const NegativeButton = () => {
  const dispatch = useDispatch()

  return (
      <button onClick={() => dispatch(handleToggleNegative())} className='function-key'>+/-</button>
  )
}

export default NegativeButton
