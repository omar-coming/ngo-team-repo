import express from 'express';
// reference express


const router = express.Router();

router.get('/', (req,res)=>{
    res.send(`hello from express!`);
})


router.get('/spencer', (req,res)=>{
    res.send(`hello from spencer!`);
    console.log('hit my route');
})

export default router;
//export to make publically available