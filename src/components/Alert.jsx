import React from 'react'
import "./styles/Alert.css"

const Alert = ({handleClickAlert, isAlert}) => {
  
  const handleClickClose = () => {
    handleClickAlert()
  }

  return (
    <section className={`cardAlert ${isAlert ? "show--alert" : ""} `}>
      <div className="cardAlert__container">
        <article className='cardAlert__header'>
          <h3 className="cardAlert__title">
            User Deleted
          </h3>
          <i onClick={handleClickClose} className='cardAlert__x bx bx-x'></i> 
        </article>
        <article className='cardAlert__content'>
          The user <b>user</b> has been deleted
      </article>
      <button onClick={handleClickClose} className='cardAlert__btn' >OK</button>
      </div>
    </section>
  )
}

export default Alert