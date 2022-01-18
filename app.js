import express from 'express';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', router);

// use catch all if they dont match
app.use(function(req,res) {
    //route doesnt match, put a 404 here
    console.log('route doesnt exist');
})


app.listen(port,()=>{
    console.log(`server running on port ${port}/`);
});

