const Router = require('express');
const UserController = require('../controllers/user.controller');
const { hashPass } = require('../middlewares/hashPassword');

const userRouter = Router();

// POST http://localhost:5001/api/user/sign-up
userRouter.post('/registration', hashPass, UserController.registrationUser);
// POST http://localhost:5001/api/user/sign-in
userRouter.post('/post', UserController.loginUser);

module.exports = userRouter;