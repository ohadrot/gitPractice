import {Request,Response} from 'express'


export const message = async(req:Request,res:Response)=>{
    res.status(200).json({message: "hello world"})
}



export const postUser =async (req: Request,res: Response)=>{
    const {name,id} = req.body;
    if(!name || !id)
    {
        res.status(400).json({message: "Name or Id are required"})
        return;
    }
    res.status(201).json({name,id});
}