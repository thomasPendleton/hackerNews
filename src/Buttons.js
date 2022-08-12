import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const data = useGlobalContext();
  console.log(data)
  
  return <h2>button container</h2>
}

export default Buttons
