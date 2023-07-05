import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = (props) => {
  const inputRef = useRef();
  const buttonText = !props.isLoading ? 'Сохранить' : 'Сохранение...';

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(inputRef.current.value);
  }

  useEffect(() => {
    inputRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name='update-avatar'
      title='Обновить аватар'
      buttonText={buttonText}
      isLoading={props.isLoading}>
      <input
        type='url'
        name='link'
        id='url'
        className='popup__input popup__input_type_url'
        placeholder='Ссылка на картинку'
        required
        ref={inputRef}
      />
      <span className='popup__input-error url-error'>-</span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
