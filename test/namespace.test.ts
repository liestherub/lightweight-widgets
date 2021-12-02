import { clearDatabase, closeDatabase, connect } from "./dbHelper";

// Connect to a new in-memory database before running any tests.
beforeAll(async () => await connect());

// Clear all test data after every test.
afterEach(async () => await clearDatabase());

// Remove and close the db and server.
afterAll(async () => await closeDatabase());

describe("namespace ", () => {

  it("test", async () => {

  });
});
