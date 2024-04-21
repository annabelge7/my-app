import Link from 'next/link'

function NavItem({ href, text, isActive }) {
  const activeClass = isActive
    ? 'bg-accent text-dark p-1.5 rounded-md shadow-lg'
    : 'text-dark'
  return (
    <li>
      <Link href={href} className={activeClass}>
        {text}
      </Link>
    </li>
  )
}

export default NavItem
