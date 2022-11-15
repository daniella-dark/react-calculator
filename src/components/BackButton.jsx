import React from 'react'
import { useDispatch } from 'react-redux'
import { handleBackButton } from '../redux/slices/numberSlice'

const BackButton = () => {
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
