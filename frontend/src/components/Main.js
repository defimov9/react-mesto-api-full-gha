import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile content__profile'>
        <div className='profile__avatar-container'>
          <img
            src={currentUser.avatar}
            alt='аватар'
            className='profile__avatar'
            onClick={props.onEditAvatar}
          />
        </div>
        <div className='profile__info'>
          <div className='profile__name-wrapper'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              className='profile__edit-button'
              type='button'
              onClick={props.onEditProfile}
            />
          </div>
          <p className='profile__job'>{currentUser.about}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          onClick={props.onAddPlace}
        />
      </section>
      <section className='gallery content__gallery'>
        <ul className='elements'>
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
