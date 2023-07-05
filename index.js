
const express = require ("express")

const app = express();
app.get("/api/main", (req, res)=>{
    res.send("<html><body><h1>What is Express?</h1><h3>Express is a node js web application framework that provides broad features for building web and mobile applications.</h3><h3>It is used to build a single page, multipage, and hybrid web application</h3><h3> It's a layer built on the top of the Node js that helps manage servers and routes.</h3></body></html>")
})
app.listen(6000)