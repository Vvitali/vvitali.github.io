import express from 'express';
const router = express.Router();

router.get("/portfolio", (req, res)=>{
	res.send("portfolio");
});

export default router;