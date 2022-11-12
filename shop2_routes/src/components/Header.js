import {NavLink as Link } from 'react-router-dom';


const Header = ()=>{

    return (
        <nav className='Navbar'>
            <Link to={'/'} activeclassname="active">Home</Link>
            <Link to={'/about'} activeclassname="active">About</Link>
            <Link to={'/contact'} activeclassname="active">Contact</Link>
        </nav>
    );
  }
  
  
  
  export default Header;