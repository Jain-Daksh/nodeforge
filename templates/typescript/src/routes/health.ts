import { Router } from 'express';

const router = Router();

export default (app: Router) => {
  router.get('/', (_req, res) => {
    res.status(200).json({
      success: true,
      message: 'Hello World API is working',
    });
  });

  app.use('/health', router);
};
