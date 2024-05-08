import React from 'react'

const Button = ({text, specific}) => {
  return (
    <a href="#contact">
           <button className={`button ${specific}`}>
              <div className='button-content'>{text}</div>
                </button>
    </a>

  )
}

export default Button

