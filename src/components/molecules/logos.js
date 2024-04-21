import LogoItem from '../atoms/logoitem' // Adjust the import path as necessary

export default function Logos() {
  return (
    <nav>
      <ul className="flex">
        <LogoItem
          href="https://www.linkedin.com/in/annabel-edwards-1302271a5/"
          imgSrc="/assets/ln.png" // Path relative to the public folder
          altText="LinkedIn Profile"
        />
        <LogoItem
          href="https://github.com/annabelge7"
          imgSrc="/assets/git.png" // Path relative to the public folder
          altText="Github Profile"
        />
      </ul>
    </nav>
  )
}
