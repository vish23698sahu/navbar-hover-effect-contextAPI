import React from 'react'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../contextAPI/context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();

    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom })
  }

  return <nav className='nav'>
    <div className='nav-center' >
      <div className='nav-header'>
        <img src={logo} className='nav-logo' alt="stripe" />
        <button className='btn toggle-btn' onClick={openSidebar} >
          <FaBars />
        </button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu} onMouseOut={closeSubmenu} >products</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu} onMouseOut={closeSubmenu} >developers</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu} onMouseOut={closeSubmenu} >company</button>
        </li>

      </ul>
      <button className='btn sign-btn'>Sign In</button>
    </div>
  </nav>
}

export default Navbar
