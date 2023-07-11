import express from 'express'

import{
    getUser,
    getUserFreinds,
    addRemoveFriend,
} from '../controllers/users.js'

import {verifyToken} from '../middleware/auth.js'

const router = express.Router();

router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFreinds)

router.patch('/:id/:friendId', verifyToken, addRemoveFriend)

export default router