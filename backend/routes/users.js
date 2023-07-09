const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers,
  getUser,
  updateUser,
  updateAvatar,
  getMe,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getMe);

router.get(
  '/:userId',
  celebrate({ params: Joi.object().keys({ userId: Joi.string().length(24).hex().required() }) }),
  getUser,
);

router.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      about: Joi.string().min(2).max(30).required(),
    }),
  }),
  updateUser,
);

router.patch(
  '/me/avatar',
  celebrate(
    {
      body: Joi.object().keys({ avatar: Joi.string().pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/).required() }),
    },
  ),
  updateAvatar,
);

module.exports = router;
