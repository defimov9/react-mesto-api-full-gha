const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const updateAvatar = document.querySelector('.profile__avatar');

const photoPopupSelector = '.popup_type_photo';
const editProfilePopupSelector = '.popup_type_edit-profile';
const addPhotoPopupSelector = '.popup_type_add-photo';
const deleteCardPopupSelector = '.popup_type_delete-card';
const updateAvatarPopupSelector = '.popup_type_update-avatar';

const userNameSelector = '.profile__name';
const userJobSelector = '.profile__job';
const userAvatarSelector = '.profile__avatar';

const cardsContainer = document.querySelector('.elements');
const cardsContainerSelector = '.elements';
const cardTemplateSelector = '#card-template';

const apiConfig = {
  baseUrl: 'https://api.defimov9.mesto.nomoreparties.sbs',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
};

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

export {
  editButton,
  addButton,
  updateAvatar,
  cardsContainer,
  cardTemplateSelector,
  apiConfig,
  validationConfig,
  cardsContainerSelector,
  photoPopupSelector,
  userJobSelector,
  userNameSelector,
  userAvatarSelector,
  editProfilePopupSelector,
  addPhotoPopupSelector,
  updateAvatarPopupSelector,
  deleteCardPopupSelector,
};
