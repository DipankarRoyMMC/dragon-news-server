const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// use middleware 
app.use(cors());

// data required 
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Node server is Running!!')
})

app.get('/categories-news', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('my node servier is running ', port);
})