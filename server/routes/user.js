const Router = require('express');
const UserController = require('../controllers/user.controller');

const userRouter = Router();

// POST http://localhost:5001/api/user/registration
userRouter.post('/registration', UserController.registrationUser);
// POST http://localhost:5001/api/user/login
userRouter.post('/post', UserController.loginUser);

module.exports = userRouter;