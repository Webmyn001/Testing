import express from "express";

import {
    getUsers,
    getUserById,
    saveUser,
    UpdateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users',saveUser);
router.patch('/users/:id', UpdateUser);
router.delete('/users/:id', deleteUser);


export default router;
