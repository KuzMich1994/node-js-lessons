const Router = require('../framework/router');
const {createUser, getUsers} = require('./user-controller');

const router = new Router();

router.get('/users', getUsers);

router.post('/users', createUser);

module.exports = router;
