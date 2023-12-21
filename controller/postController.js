const db = require('../model/');

const Post = db.posts;

const AddPost = async(req,res)=>{
    try{
        const obj = {
            id:req.body.id,
            post : req.body.post,
            author: req.body.author,
            desc: req.body.desc
        }
    
        const posts = await Post.create(obj)
        res.status(201).send(posts)
    }catch (error) {
        res.status(500).json({ error: error.message });
      }
 
}

const GetPost = async(req,res)=>{
   try{ const posts = await Post.findAll({})

    res.status(200).send(posts);}
    catch(error){
        res.status(500).json({error: error.message})
    }
}


module.exports = {
    AddPost,
    GetPost
}