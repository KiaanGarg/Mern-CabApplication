import express from 'express'
import { getAllUsers, addUser, updateUser, deleteUser, getUser } from '../../controllers/userController.js'

const router = express.Router() // setup the express router

// routes
router.route('/').get(getAllUsers)
router.route('/').post(addUser)
router.route('/:id').put(updateUser)
router.route('/:id').delete(deleteUser)
router.route('/:id').get(getUser)

export default router