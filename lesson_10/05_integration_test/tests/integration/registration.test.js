require("dotenv").config();
const mongoose = require("mongoose");
const testRequest = require("supertest");
const app = require("../../app");
const User = require("../../models/user");

const { DB_TEST_HOST } = process.env;

describe("registration", () => {
    beforeAll(async () => {
        await mongoose
            .connect(DB_TEST_HOST)
            .then(() => console.log("DB Connected"))
            .catch((e) => console.error(e));

        await User.deleteMany({});
    });

    it.skip("should registration new user", async () => {
        const response = await testRequest(app).post("/api/auth/registration").send({
            email: "user@gmail.com",
            password: "123123",
        });

        expect(response.statusCode).toBe(201);
        expect(response.body.email).toBe("user@gmail.com");
    });

    it("should not registrate the same user 2 times", async () => {
        const response = await testRequest(app).post("/api/auth/registration").send({
            email: "user@gmail.com",
            password: "123123",
        });

        expect(response.statusCode).toBe(409);
    });

    afterAll(async () => {
        await mongoose.disconnect().then(() => console.log("DB disconnected"));
    });
});
