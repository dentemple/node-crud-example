import request from "supertest";
import app from "../app";

import { BASE_URL } from "../app/constants";

describe("app", () => {
  describe(`${BASE_URL}`, () => {
    it("should respond to a basic ping", done => {
      request(app)
        .get(`${BASE_URL}`)
        .expect(200)
        .expect("Content-Type", /text\/html/, done);
    });
  });
});
