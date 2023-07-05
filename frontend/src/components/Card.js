import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `elements__like ${
    isLiked && 'elements__like_active'
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className='elements__card'>
      <img
        src={card.link}
        alt={card.name}
        className='elements__image'
        onClick={handleClick}
      />
      {isOwn && (
        <div className='elements__remove' onClick={handleDeleteClick} />
      )}

      <div className='elements__info-container'>
        <h2 className='elements__title'>{card.name}</h2>
        <div className='elements__like-container'>
          <button
            className={cardLikeButtonClassName}
            type='button'
            onClick={handleLikeClick}
          />
          <p className='elements__likes-count'>{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
