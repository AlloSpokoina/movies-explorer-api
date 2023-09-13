const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const signupRouter = require('./signup');
const signinRouter = require('./signin');
const NotFoundError = require('../error/NotFoundError');

router.use('/signup', signupRouter);
router.use('/signin', signinRouter);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('страница не найдена.'));
});

module.exports = router;
