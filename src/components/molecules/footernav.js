import { Button } from '../atoms'
import ThemeButton from './themebutton'
import ContactButton from './contactbutton'
export default function FooterNav() {
  return (
    <div className="flex">
      <ThemeButton />
      <ContactButton />
    </div>
  )
}
