import React from 'react'
import { useDispatch } from 'react-redux'
import { handleBackButton } from '../redux/number/slice'

const BackButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(handleBackButton())}
      className='function-key'
    >
      ←
    </button>
  )
}

export default BackButton
