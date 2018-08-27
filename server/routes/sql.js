import express from 'express';

const router = express.Router();

router.get('/all', (req, res) => {
	res.send('je viens du back')
});

export default router;
