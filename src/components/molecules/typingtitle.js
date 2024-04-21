'use client'

import { useEffect, useState } from 'react'

export default function TypingTitle() {
  const titles = [
    'a software engineer.',
    'a full-stack developer.',
    'an environmentalist.',
  ]

  const [titleIndex, setTitleIndex] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState('a software engineer')
  const [typing, setTyping] = useState(true)

  //will be run every time application is rendered
  useEffect(() => {
    let interval
    if (typing) {
      interval = setInterval(() => {
        //set the interval while typing
        if (displayedTitle.length < titles[titleIndex].length) {
          setDisplayedTitle(
            titles[titleIndex].substring(0, displayedTitle.length + 1),
          ) //increase substring (aka letter)
        } else {
          clearInterval(interval)
          setTimeout(() => setTyping(false), 1500)
        }
      }, 150)
    } else {
      //not typing which means it needs to go back
      interval = setInterval(() => {
        //set the interval while typing
        if (displayedTitle.length > 0) {
          setDisplayedTitle(
            titles[titleIndex].substring(0, displayedTitle.length - 1),
          ) //increase substring (aka letter)
        } else {
          clearInterval(interval)
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
          setTyping(true)
        }
      }, 80)
    }
    return () => clearInterval(interval)
  }, [titleIndex, typing, displayedTitle, titles])
  //dependencies -- whenever something in useEffect dependencies changes, hook will run
  return (
    <div className="text-dark flex flex-col items-center">
      <p className="pt-2 text-5xl">
        Hi, my name is <span className="text-secondary">Annabel.</span>
      </p>
      <p className="pt-3 text-4xl">
        I'm <span className="font-bold">{displayedTitle}</span>
      </p>
    </div>
  )
}
