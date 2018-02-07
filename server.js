const DEBUG = true;
import express from "express";
import React from "react";
import ReactDOM from 'react-dom';
import htmlRoutes from "./controllers/htmlRoutes";
console.log("Server-file load: ok!");
const app = express();
const PORT = 8080;
app.all("*", htmlRoutes);
app.get(`/`,(req, res)=>{
	console.log("Request to //");
	res.send("YO!")
});
app.listen(PORT, ()=>{
	console.log(`Server started at port: ${PORT}`);
})

