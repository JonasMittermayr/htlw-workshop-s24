import { object, string, TypeOf } from "zod";

export const createUserSchema = object({

    body: object({
        username: string({
            message: "username is required"
        }).min(3).max(40),

        email: string({
            message: "email is required"
        }).email(),

        password: string({
            message: "passwort bitte"
        }).min(8).max(255)

    })
});


export const getUserSchema = object({
    params: object({
        id: string({ message: "UserID is required"})
    })
})


export type createUserInput = TypeOf<typeof createUserSchema>;
export type getUserInput = TypeOf<typeof getUserSchema>;

