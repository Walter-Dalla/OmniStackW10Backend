const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb://root:dallatorre@cluster0-shard-00-00-jbpgu.gcp.mongodb.net:27017,cluster0-shard-00-01-jbpgu.gcp.mongodb.net:27017,cluster0-shard-00-02-jbpgu.gcp.mongodb.net:27017/w10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get("/oi",(req, resp)=>{
    return resp.json({"aa":"aa"})
})
app.use(express.json())
app.use(routes)

app.listen(5000)