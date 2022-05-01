import express from 'express'
import { getAllCabs, addCab, updateCab, deleteCab, getCab } from '../../controllers/cabController.js'

const router = express.Router() // setup the express router

// routes
router.route('/').get(getAllCabs)
router.route('/').post(addCab)
router.route('/:id').put(updateCab)
router.route('/:id').delete(deleteCab)
router.route('/:id').get(getCab)

export default router

