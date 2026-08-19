  import request from 'supertest';
  import app from '../src/app';

  describe('Health Check', () => {
    it('should return server health', async () => {
      const response = await request(app).get('/health');

      expect(response.status).toBe(200);

      expect(response.body).toEqual({
        success: true,
        message: 'Hello World API is working',
      });
    });
  });
