import express from 'express'
import protectRoute from '../middleware/protectRoute.js'
import { getUserForSidebar } from '../controller/userController.js'

const router = express.Router()

router.route('/').get(protectRoute,getUserForSidebar)

export default router