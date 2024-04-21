'use client'
import { useState, useEffect } from 'react'
import { Button } from '../atoms'

const themes = ['', 'theme-Summer', 'theme-Winter', 'theme-Fall']

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue) // Initialize state with defaultValue initially

  useEffect(() => {
    // Retrieve the stored value from localStorage when the component mounts
    const stickyValue = window.localStorage.getItem(key)
    if (stickyValue !== null) {
      setValue(stickyValue)
    }
  }, [key])

  useEffect(() => {
    // Anytime 'value' or 'key' changes, update localStorage
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default function ThemeButton() {
  const [themeIndex, setThemeIndex] = useStickyState(0, 'themeIndex')

  useEffect(() => {
    const themeClass = themes[themeIndex]
    document.documentElement.className = themeClass
  }, [themeIndex])

  const changeTheme = () => {
    const nextThemeIndex = (themeIndex + 1) % themes.length
    setThemeIndex(nextThemeIndex)
  }

  const buttonText = themes[themeIndex]
    ? themes[themeIndex].substring(6)
    : 'Spring'

  return <Button onClick={changeTheme} text={buttonText} />
}
