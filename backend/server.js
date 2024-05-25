// const express=require('express')   //common js syntax
import  express from 'express' //module js syntax is used when we need to change  in package.json "type":"module"
 const app=express()

//create a server
//  app.get('/',(req,res)=>{
//     res.send("server is ready")
//  })

//get a list of 5 jokes
 app.get('/api/jokes',(req,res)=>{
  const jokes=[
    {
        id:1,
      title:'a 1st jokes',
      content:"this is jokes"
    },

    {
        id:2,
        title:'a 2nd jokes',
        content:"this is jokes"
    },

    {
        id:3,
        title:'a 3rd jokes',
        content:"this is jokes"
    },

    {
        id:4,
        title:'a 4rt jokes',
        content:"this is jokes"
    },
    {
        id:5,
        title:'a 5th jokes',
        content:"this is jokes"
    },
  ]

  res.send(jokes)

 })

const  port=process.env.PORT || 5000;  //port is required if not mention ,not run on server

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})

// import express from "express";      
// const app = express();

// app.get("/prataps/data", (req, res) => {
//   const data = [
//     {
//       id: 1,
//       name: "pratap",
//       class: "sybcs",
//     },
//     {
//       id: 2,
//       name: "omkar",
//       class: "sybcs",
//     },
//     {
//       id: 3,
//       name: "dhananjay",
//       class: "sybcs",
//     },
//   ];

//   res.send(data);
// });
// const port=process.env.PORT||2000;

// app.listen(port,()=>{
// console.log(`the server is running at http://localhost:${port}`);
// })
