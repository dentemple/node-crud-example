import request from "supertest";
import app from "../../app";

import { BEVERAGES_URL } from "../beverages/constants";

describe("beverages", () => {
  describe(`${BEVERAGES_URL}`, () => {
    it("should respond to a basic ping", done => {
      request(app)
        .get(`${BEVERAGES_URL}/ping`)
        .expect(200)
        .expect("Content-Type", /text\/html/, done);
    });
  });
});
