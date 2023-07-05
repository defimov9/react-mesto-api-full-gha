import React from 'react';

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_photo ${
        props.isOpen ? `popup_opened` : ''
      }`}>
      <div className='popup__container popup__container_type_photo'>
        <figure className='popup__figure'>
          <img
            src={props.card.link}
            alt={props.card.name}
            className='popup__photo'
          />
          <figcaption className='popup__subtitle'>{props.card.name}</figcaption>
        </figure>
        <button
          className='popup__close'
          type='button'
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
