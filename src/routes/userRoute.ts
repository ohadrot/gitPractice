import { Router } from "express";
import { message, postUser } from "../controllers/userController";


const route = Router();


route.route('/message').get(message);
route.route('/user').post(postUser)

export default route;