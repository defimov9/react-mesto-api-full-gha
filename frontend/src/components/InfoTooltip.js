import React from 'react';
import success from '../images/success.svg';
import error from '../images/error.svg';

const InfoTooltip = (props) => {
  const title = props.isSuccess
    ? 'Вы успешно зарегистрировались!'
    : 'Что-то пошло не так! Попробуйте ещё раз.';
  return (
    <div className={`popup ${props.isOpen ? `popup_opened` : ''}`}>
      <div className='popup__container popup__container_type_tooltip'>
        <img
          className='popup__image'
          src={props.isSuccess ? success : error}
          alt={title}
        />
        <p className='popup__title popup__title_type_tooltip'>{title}</p>
        <button
          className='popup__close'
          type='button'
          onClick={props.onClose}
        />
      </div>
    </div>
  );
};

export default InfoTooltip;
