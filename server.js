// Express Library
const express = require('express')
const app = express()

// set up View Engine
app.set('view engine','ejs')

// Defining route with request and response variables
app.get('/',(req,res) => {
    res.render('index')
})
app.listen(process.env.PORT || 5000);