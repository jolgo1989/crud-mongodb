import { Router } from "express";
import { postUser, getUser, putUser, deleteUser } from "../controllers/auth.controller.js"


const router = Router()

router.get('/user', getUser)
router.post('/user', postUser)
router.put('/user/:userId', putUser)
router.delete('/user/:userId', deleteUser)


export default router