import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello World API is working',
  });
});

export default router;
