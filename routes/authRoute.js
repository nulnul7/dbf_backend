import express from 'express';
import { register, login, getAdminUser, logout } from '../controllers/authCtr.js'
import { userInputValidation, userValidation, verifyToken } from '../middlewares/validation.js';
import { refreshToken } from '../controllers/refreshToken.js';


const route = express.Router();

route.post('/register', userInputValidation, userValidation, register)

route.post('/login', login)

route.get('/adminUser', verifyToken, getAdminUser)

route.get('/token', refreshToken);

route.delete('/logout', logout)


export default route