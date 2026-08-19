const request = require("supertest");
const app = require("../src/app");

describe("Health Check", () => {
  it("should return server health", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      success: true,
      message: "Server is running",
    });
  });
});