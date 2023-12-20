const db = require('../model')
const {where}=require("sequelize")
const Comment = db.comments;

const addComments = async(req,res)=>{
 
    const {comment,postId}=req.body
    // console.log(obj,'manish')
    const comments = await Comment.create({comment,postId});
    res.status(201).send(comments);
}

const getComments = async(req,res)=>{
 const {postId}=req.params;

    const comments = await Comment.findAll({where:{postId}});
    res.status(200).send(comments);
}

const deleteComments = async(req,res)=>{
    const id = req.params.id
    // console.log(id)
    await Comment.destroy({where: {id:id}})
    res.status(200).send('deleted')
}

module.exports = {
    addComments,
    getComments,
    deleteComments
}