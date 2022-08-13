import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const data = useGlobalContext()
  
  
  return <h2>prev/next button</h2>
}

export default Buttons
