const db = require('../model/');

const Post = db.posts;

const AddPost = async(req,res)=>{
    const obj = {
        id:req.body.id,
        post : req.body.post,
        author: req.body.author,
        desc: req.body.desc
    }

    const posts = await Post.create(obj)
    res.status(201).send(posts)
}

const GetPost = async(req,res)=>{
    const posts = await Post.findAll({})

    res.status(200).send(posts);
}


module.exports = {
    AddPost,
    GetPost
}