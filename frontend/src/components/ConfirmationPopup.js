import React from 'react';
import PopupWithForm from './PopupWithForm';

const ConfirmationPopup = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    props.onDeleteCard(props.card);
  }

  const buttonText = !props.isLoading ? 'Да' : 'Удаление...';

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name='delete-card'
      title='Вы уверены?'
      buttonText={buttonText}
      isLoading={props.isLoading}
    />
  );
};

export default ConfirmationPopup;
