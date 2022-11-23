import PostMessage from '../models/postMessage.js';

export const getPosts=(req,res)=>{
    //res.send("This works");
    try{
        const postMessages= await postMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};

export const createPost=(req,res)=>{
    res.send('Post Creation');
}