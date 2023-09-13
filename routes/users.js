const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { editUserData, getUsers } = require('../controllers/users');

router.get('/me', getUsers);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().pattern(/^\S+@\S+\.\S+$/),
  }),
}), editUserData);

module.exports = router;
