import React, { useContext, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditProfilePopup = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const buttonText = !props.isLoading ? 'Сохранить' : 'Сохранение...';

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name='edit-profile'
      title='Редактировать профиль'
      buttonText={buttonText}
      isLoading={props.isLoading}>
      <input
        type='text'
        name='name'
        id='userName'
        className='popup__input popup__input_type_name'
        placeholder='Имя'
        minLength='2'
        maxLength='40'
        required
        value={name || ''}
        onChange={(e) => setName(e.target.value)}
      />
      <span className='popup__input-error userName-error'>-</span>
      <input
        type='text'
        name='job'
        id='userJob'
        className='popup__input popup__input_type_job'
        placeholder='Вид деятельности'
        minLength='2'
        maxLength='200'
        required
        value={description || ''}
        onChange={(e) => setDescription(e.target.value)}
      />
      <span className='popup__input-error userJob-error'>-</span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
