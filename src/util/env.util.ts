import { object, string, number, coerce} from "zod";
import dotenv from 'dotenv';

dotenv.config();

const envSchema = object({
    PORT : coerce.number({
        message: "Port must be a number"
    }).min(0).max(65536),

    MONGO_URL: string({
        message: "MongoDB URL is required"
    })
});


export default envSchema.parse(process.env);