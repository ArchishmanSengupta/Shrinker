// Express Library
const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/urlShortner',{
    useNewUrlParser: true, useUnifiedTopology: true,
})
// set up View Engine
app.set('view engine','ejs')

// Defining route with request and response variables
app.get('/',(req,res) => {
    res.render('index')                  // rendering index.ejs
})

// Creating POST end-points 

app.post('/shortUrls',(req,res) => {

})
app.listen(process.env.PORT || 5000);