import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = (props) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ name, link });
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  const buttonText = !props.isLoading ? 'Добавить' : 'Добавление...';

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name='add-photo'
      title='Новое место'
      buttonText={buttonText}
      isLoading={props.isLoading}>
      <input
        type='text'
        name='name'
        id='title'
        className='popup__input popup__input_type_title'
        placeholder='Название'
        minLength='2'
        maxLength='30'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className='popup__input-error title-error'>-</span>
      <input
        type='url'
        name='link'
        id='link'
        className='popup__input popup__input_type_url'
        placeholder='Ссылка на картинку'
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <span className='popup__input-error link-error'>-</span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
