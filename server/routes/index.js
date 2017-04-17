import express from 'express';
import draw from './draw';

const router = express.Router();

router.use('/*', (req, res, next) => {
  res.setHeader("Expires", "-1");
  res.setHeader("Cache-Control", "must-revalidate, private");
  next();
});

router.use('/draw', draw);

export default router;