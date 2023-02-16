import React from 'react'
import "./styles/UserCard.css"
import IconMail from "./Icons/mail.svg"
import IconCalendar from "./Icons/calendar.svg"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  // Confirmación de eliminación de usuario
  function confirmDelete() {
    const resp = confirm ("Estas seguro que deseas eliminar el usuario")

    if (resp == true) {
      return deleteUser(user.id)
    }
    else {
      return false
    }
  }

  return (
    <article className='userCard'>
      <h3 title={user.first_name + " " + user.last_name} className='userCard__fullName'>{user.first_name} {user.last_name}</h3>
      <hr className='userCard__separator' />
      <ul className='userCard__list'>
        <li className='userCard__item'>
          <span>Email</span>
            <div> 
              <img className='userCard__item-img' src = {IconMail} alt="" />
              {user.email}
            </div>
        </li>
        <li className='userCard__item'>
        <span>Birthday</span>
          <div>
            <img src= {IconCalendar} alt="" className="userCard__item-img" />
            {user.birthday}
          </div>
        </li>
      </ul>
      <hr className='userCard__separator' />
      <footer className='userCard__footer'>
        <button className='userCard__footer-btn-trash' onClick={() => confirmDelete()}><i className='bx bx-trash'></i> </button>
        <button className='userCard__footer-btn-edit' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
      </footer>
    </article>
  )
}

export default UserCard