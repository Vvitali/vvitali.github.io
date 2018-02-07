const DEBUG = true;
import express from "express";
console.log("Server-file load: ok!");
const app = express();
const PORT = 8080;
app.get(`/`,(req, res)=>{
	console.log("Request to //");
	res.send("YO!")
});
app.listen(PORT, ()=>{
	console.log(`Server started at port: ${PORT}`);
})

