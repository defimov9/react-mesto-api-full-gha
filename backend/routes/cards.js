const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      link: Joi.string().pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/).required(),
    }).unknown(true),
  }),
  createCard,
);

router.delete(
  '/:cardId',
  celebrate({ params: Joi.object().keys({ cardId: Joi.string().length(24).hex().required() }) }),
  deleteCard,
);

router.put(
  '/:cardId/likes',
  celebrate({ params: Joi.object().keys({ cardId: Joi.string().length(24).hex().required() }) }),
  likeCard,
);
router.delete(
  '/:cardId/likes',
  celebrate({ params: Joi.object().keys({ cardId: Joi.string().length(24).hex().required() }) }),
  dislikeCard,
);

module.exports = router;
