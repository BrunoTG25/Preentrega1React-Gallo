import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Pc Gamming</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Productos</li>
                <li>Juegos</li>
                <li>Sobre Nosotros</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar
