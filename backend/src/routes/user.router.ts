import express from "express";
import { createUserHandler } from "../controller/user.controller";
import { validate } from "../middleware/validation";
import { createUserSchema} from "../schema/user.schema";
import { getUserSchema } from "../schema/user.schema";
import { getUserHandler } from "../controller/user.controller";

const router = express.Router();

router.get('/:id' , validate(getUserSchema), getUserHandler);

router.post("/", validate(createUserSchema), createUserHandler);

export default router;