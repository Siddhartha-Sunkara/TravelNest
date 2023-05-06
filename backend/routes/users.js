import express from "express"
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js"
const router = express.Router()



router.put('/:id', updateUser)
//delete new User

router.delete('/:id', deleteUser)
//get single User

router.get('/:id', getSingleUser)
//get all User

router.get('/', getAllUser)

export default router