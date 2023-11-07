import { NavLink } from 'react-router-dom'
import "./GalleryNavigation.css"

export default function GalleryNavigation({ galleries }) {
  console.log(galleries) //*successfully destructured from props
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to='/'> Home </NavLink >
      {galleries.map(item => (
        <NavLink to={'galleries/' + item.id.toString()} key={item.id}>
          <br/>{item.name}
        </NavLink>
      ))}
    </nav>
  )
}
