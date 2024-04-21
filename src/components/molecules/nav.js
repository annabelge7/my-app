'use client'

import NavItem from '../atoms/navitem'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex space-x-3">
        <NavItem href="/about" text="About" isActive={pathname === '/about'} />
        <NavItem
          href="/projects"
          text="Projects"
          isActive={pathname === '/projects'}
        />
        <NavItem
          href="/experiences"
          text="Resume"
          isActive={pathname === '/experiences'}
        />
        <NavItem
          href="/contact"
          text="Blog"
          isActive={pathname === '/contact'}
        />
      </ul>
    </nav>
  )
}
