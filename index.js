const express= require ('express');
const app=express();
const path=require('path');
const fs=require('fs');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set ("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.get ('/', (req,res)=>{
    fs.readdir(`./files`, (err,files)=>{
        // console.log(files)
         res.render("index" , {files: files});
    })
    // res.render("index")

})

app.post ('/create', (req,res)=>{
    // console.log(req.body)
    fs.writeFile(`./files/${req.body.title.split(' ').join ('')}.txt`, req.body.details, (err)=>{
      res.redirect("/")
    })

})




app.listen(3000)