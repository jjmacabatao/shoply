import React from 'react'
import { variants } from '../styles/global'

const Button = ({children, variant, onClick}) => {
  return (
    <button onClick={onClick} className={`${variants[variant]}`}>
        {children}
    </button>
  )
}

export default Button