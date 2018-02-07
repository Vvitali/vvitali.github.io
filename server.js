const DEBUG = true;
import express from "express";
import htmlRoutes from "./controllers/htmlRoutes";
console.log("Server-file load: ok!");
const app = express();
const PORT = 8080;
app.all("*", htmlRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, ()=>{
	console.log(`Server started at port: ${PORT}`);
})

