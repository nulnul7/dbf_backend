import express from 'express'
import {
    getUsers,
    getUser,
    deleteUser,
    updateUser
} from '../controllers/userCtr.js'

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', verifyAdmin, getUsers)

router.get('/:id',verifyAdmin, getUser)

router.delete('/delete/:id',verifyAdmin, deleteUser)

router.put('/update/:id', verifyUser, updateUser)


export default router;