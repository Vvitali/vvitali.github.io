import express from 'express';
import React from "react";
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const router = express.Router();

router.get(`/`,(req, res)=>{
	console.log("Request to //");
	res.send("home!")
});
router.get(`/portfolio`, (req, res)=>{
	res.send("portfolio");
});
router.get(`/contacts`, (req, res)=>{
	res.send("contacts");
});
router.get(`/home`, (req, res)=>{
	res.send("home");
});

export default router;