import React from 'react'
import { variants } from '../styles/global'

const Button = ({children, variant, disabled = false, onClick}) => {
  return (
    <button onClick={onClick} className={`${variants[variant]}`} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button