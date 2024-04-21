'use client'
import { useState } from 'react'

export default function Button({ text, onClick }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    console.log('Clicked:', text)
    setClicked(true)
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className="
        bg-dark 
        text-primary 
        hover:bg-accent 
        active:bg-extra
        m-2 
        transform 
        rounded-md 
        p-2 
        shadow-lg 
        transition 
        duration-200 
        ease-in-out
      "
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
