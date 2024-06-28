import { Request, Response } from "express";

import { createUserSchema } from "../schema/user.schema";
import { UserModel } from "../model/user.model";
import { pick } from 'lodash';

import { createUserInput, getUserInput } from "../schema/user.schema";
import { getUser } from "../service/user.service";


export async function createUserHandler(
    req: Request<{}, {}, createUserInput["body"]>, 
    res: Response
){
    
    try{
        const user = await UserModel.create(req.body);

        return res.status(200).json(pick(user, "username", "email", "_id"));
        
    }
        
    catch(e){
        console.log(e);
        return res.status(400).send(e);
    }
        


    console.log(req.body);
}

export async function getUserHandler(
    req: Request<getUserInput ["params"]>, 
    res: Response
)
{
    try{
        const user =  await getUser(req.params.id);

        return res.status(200).json(
            pick(user, "_id", "username", "email")
        );
    
    }catch(e){
        return res.status(404).json({
            message: "user not found du kek",
            error: e
        })
    }
    
}