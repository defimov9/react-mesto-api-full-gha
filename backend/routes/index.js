const router = require('express').Router();
const auth = require('../middlewares/auth');

const usersRoutes = require('./users');
const cardsRoutes = require('./cards');
const authorization = require('./authorization');

router.use('/', authorization);

router.use(auth);

router.use('/users', usersRoutes);
router.use('/cards', cardsRoutes);

module.exports = router;
