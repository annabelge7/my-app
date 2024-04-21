import Nav from '../molecules/nav'
import Name from '../molecules/name'
import Logos from '../molecules/logos'

export default function Header() {
  return (
    <header className="bg-background flex items-center justify-between p-4 shadow-md">
      <Name />
      <Nav />
      <Logos />
    </header>
  )
}
