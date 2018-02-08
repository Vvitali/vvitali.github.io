import express from 'express';

const router = express.Router();

router.get(`/blog`, (req, res)=>{
	res.send("home");
});

export default router;