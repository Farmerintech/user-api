import express from 'express';
import { getAllUsers, getASingleUser, createUser, updateUser, deleteUser} from './controllers/usersRoutes.js';

export const router = express.Router();
router.get('/', getAllUsers);
router.get('/:id', getASingleUser)
router.post('/', createUser);
router.put('/:id', updateUser)
router.delete('/:id', deleteUser);