const LogoItem = ({ href, imgSrc, altText }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={altText} className="size-9 p-1" />{' '}
    </a>
  </li>
)

export default LogoItem
