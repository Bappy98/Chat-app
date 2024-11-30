import express from 'express'
import protectRoute from '../middleware/protectRoute.js'
import { getMessage, sendMessage } from '../controller/messageController.js'

const router = express.Router()

router.route('/send/:id').post(protectRoute,sendMessage)
router.route('/:id').get(protectRoute,getMessage)

export default router