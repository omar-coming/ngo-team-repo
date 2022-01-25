import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from express!');
})

router.get('/trevor', (req, res) => {
    res.send(`this is trevor's page`);
    console.log('hit my route');
})

router.get('/joe', (req, res) => {
    res.send(`this is joe's page`);
    console.log('hit route for joe');
})

router.get('/john', (req, res) => {
    res.send(`this is john's page`);
})

// export the router and make it available to app.js
export default router;