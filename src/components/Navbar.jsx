import React from 'react'
import "./styles/Navbar.css"

const Navbar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar'>
      <h1 className='navbar__title'>Users CRUD | Camilo Giraldo</h1>
      <button className='navbar__btn' onClick={handleClickShowModal}><i className='navbar__btn-icon bx bx-user-plus'></i> Add User</button>
    </nav>
  )
}

export default Navbar