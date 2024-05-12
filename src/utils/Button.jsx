import React from 'react'

const Button = ({text, specific,type}) => {
  return (
    <a href="#contact">
           <button type={type} className={`button ${specific}`}>
              <div className='button-content'>{text}</div>
                </button>
    </a>

  )
}

export default Button

