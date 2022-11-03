import express from 'express'
import {allStudent , deleteStudent} from '../controllers/studentcontrollers.js'
const route = express.Router()


route.get('/student/all',allStudent)

route.get('/student/delete/:id([0-9]{2})',deleteStudent)

export default route;