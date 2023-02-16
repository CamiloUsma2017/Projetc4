import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import "./styles/ModalForm.css"

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
};

const ModalForm = ({isShowModal, handleClickShowModal, createUser, updatingUser, updateUser, setUpdatingUser}) => {

  const {register, handleSubmit, reset, formState: { errors }} = useForm()

  const submit = (data) => {
    if(updatingUser){
      updateUser(data, updatingUser.id)
    } else {
      createUser(data)
    }
    reset(defaultValues)
  }

  const handleClickClose = () => {
    handleClickShowModal()
    reset(defaultValues)
    setUpdatingUser()
  }

  useEffect(() => {
    if(updatingUser) {
    reset(updatingUser) 
  }
  }, [updatingUser])

  return (
    <section className={`modalForm ${isShowModal ?  "activeForm" : ""}`}>
      <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
        <h3 className='modalForm__title'>{updatingUser ? "Edit User" : "New User"}</h3>
        <i onClick={handleClickClose} className='modalForm__x bx bx-x'></i>
        <div className='modalForm__div'>
          <label className='modalForm__label' htmlFor="">First Name</label>
          <input className='modalForm__input' type="text" {...register("first_name", { required: true, minLength: 4 })} />
          {errors.first_name && <p className='modalForm__div-error' >Please check the First Name</p>}
        </div>
        <div>
          <label className='modalForm__label' htmlFor="">Last Name</label>
          <input className='modalForm__input' type="text" {...register("last_name", { required: true, minLength: 4 })} />
          {errors.last_name && <p className='modalForm__div-error'>Please check the Last Name</p>}
        </div>
        <div>
          <label className='modalForm__label' htmlFor="">E-mail</label>
          <input className='modalForm__input' type="email" {...register("email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
          {errors.email && <p className='modalForm__div-error'>Please check the E-mail</p>}
        </div>
        <div>
          <label className='modalForm__label' htmlFor="">Password</label>
          <input className='modalForm__input' type="password" {...register("password", { required: true, minLength: 8 })} />
          {errors.email && <p className='modalForm__div-error'>Please check the Password</p>}
        </div>
        <div>
          <label className='modalForm__label' htmlFor="">Birthday</label>
          <input className='modalForm__input' type="date" {...register("birthday", {required: true})} />
          {errors.email && <p className='modalForm__div-error'>Please check the Birthday</p>}
        </div>
        <button className='modalForm__btn'>{updatingUser ? "Save changes" : "Add New User"}</button>
      </form>
    </section>
  );
}

export default ModalForm