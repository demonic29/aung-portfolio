import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  label : string
}

const Button : React.FC<ButtonProps> = ({label, children, ...props}) => {
  return (
    <button {...props}>
      {label}
      {children}
    </button>
  )
}

export default Button