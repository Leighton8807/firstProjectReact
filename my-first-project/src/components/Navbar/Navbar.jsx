import { Anchor } from "../Anchor/Anchor"

Anchor

export const Navbar = () => {
  return (
    <nav> 
      <Anchor textAnchor ='Home'/>
      <Anchor textAnchor ='About'/>
      <Anchor textAnchor ='Services'/>
      <Anchor textAnchor ='Portfolio'/>
      <Anchor textAnchor ='Contact'/>
    </nav>
  )
}
