import './Navbar.css'

const Navbar = () => {
    return(
       <div className="nav">
        <div className="nav-logo">EV-olution</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explorar</li>
            <li>Sobre</li>
            <li className='nav-contato'>Contato</li>
        </ul>
       </div>
    )
}

export default Navbar