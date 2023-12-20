const express = require('express');
const cors = require('cors');
const app = express();
const postRoutes = require('./routes/PostRoutes')
const commentRoutes = require('./routes/commmentRoutes');

app.use(express.json());


app.use(express.urlencoded({extended:false}))
var coroption={
    localhost:3000
}

app.use(cors());

app.use('/api/posts',postRoutes);

app.use('/api/comments',commentRoutes);

//associations




app.use('/',(req,res,next)=>{
    res.json({
        name: 'manish sanodiya'
    })
})



const PORT = process.env.PORT || 4500;

app.listen(PORT);