import express from "express";
import {GuestController} from "../../controllers"

const router = express.Router();

router.get("/token/add", GuestController.add);
router.get("/token/remove", GuestController.delete);

export default router;