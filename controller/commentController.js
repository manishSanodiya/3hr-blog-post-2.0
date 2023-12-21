const db = require('../model')
const {where}=require("sequelize")
const Comment = db.comments;

const addComments = async(req,res)=>{
 try{
    const {comment,postId}=req.body
    // console.log(obj,'manish')
    const comments = await Comment.create({comment,postId});
    res.status(201).send(comments);
 } catch (error){
    res.status(500).json({error:error.message});
 }
  
}

const getComments = async(req,res)=>{
 try{
    const {postId}=req.params;
    const comments = await Comment.findAll({where:{postId}});
    res.status(200).send(comments);
 }catch (error) {
    res.status(500).json({ error: error.message });
  }
   
}

const deleteComments = async(req,res)=>{
    try{
        const {id} = req.params
        await Comment.destroy({where: {id:id}})
        res.status(200).send('deleted')
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
 
}

module.exports = {
    addComments,
    getComments,
    deleteComments
}