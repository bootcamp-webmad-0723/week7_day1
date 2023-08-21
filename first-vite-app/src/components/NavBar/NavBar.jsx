import './NavBar.css'
import logo from './../../assets/disney-logo.png'

const NavBar = () => {

    return (
        <header className='NavBar'>
            <img src={logo} alt="Logotipo" />
            <nav>
                <ul>
                    <li><a href="/whatever">Inicio</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar