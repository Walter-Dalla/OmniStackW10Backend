const express = require('express');
const mongoose = require('mongoose')
//const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://root:dallatorre@cluster0-jbpgu.gcp.mongodb.net/test?retryWrites=true&w=majority')

app.use(express.json)

app.get('/oi', (req, resp) =>{
    console.log("oi")
    return resp.json({"sla":"sla"})   
})

//app.use(routes)

app.listen(3000)
console.log("app")