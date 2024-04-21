'use client'

import NavItem from '../atoms/navitem'
import { usePathname } from 'next/navigation'

export default function Name() {
  const pathname = usePathname()
  return (
    <nav>
      <ul>
        <NavItem href="/" text="Home" isActive={pathname === '/'}>
          {' '}
        </NavItem>
      </ul>
    </nav>
  )
}
