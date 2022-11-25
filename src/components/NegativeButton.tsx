import React from 'react'
import { useDispatch } from 'react-redux'
import { handleToggleNegative } from '../redux/number/slice'

const NegativeButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
      <button onClick={() => dispatch(handleToggleNegative())} className='function-key'>+/-</button>
  )
}

export default NegativeButton
