import React from 'react';

function PopupWithForm({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  buttonText,
  children,
  isLoading,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ''}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{title}</h2>
        <form
          className='popup__form'
          name={name}
          action='#'
          onSubmit={onSubmit}>
          {children}
          <button
            className={`popup__submit ${
              isLoading ? 'popup__submit_inactive' : ''
            }`}
            type='submit'
            disabled={isLoading}>
            {buttonText}
          </button>
        </form>
        <button className='popup__close' type='button' onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
