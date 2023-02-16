import React from 'react'
import UserCard from './UserCard'
import "./styles/UserList.css"
import Alert from './Alert';

const UsersList = ({users, deleteUser, setUpdatingUser, handleClickShowModal, handleClickAlert, isAlert}) => {
  return (
    <>
      <section className='userList'>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdatingUser={setUpdatingUser}
            handleClickShowModal={handleClickShowModal}
          />
        ))}
      </section>
      <Alert handleClickAlert={handleClickAlert} isAlert={isAlert} />
    </>
  );
}

export default UsersList