const db = require('../model')

const Comment = db.comments;

const addComments = async(req,res)=>{
    const obj = {
        comment : req.body.comment
    }
    const comments = await Comment.create(obj);
    res.status(201).send(comments);
}

const getComments = async(req,res)=>{
    const comments = await Comment.findAll({});
    res.status(200).send(comments);
}

const deleteComments = async(req,res)=>{
    const id = req.params.id
    await Comment.destroy({where: {id:id}})
    res.status(200).send('deleted')
}

module.exports = {
    addComments,
    getComments,
    deleteComments
}