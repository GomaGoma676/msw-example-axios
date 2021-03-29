import { rest } from "msw";

export const handlers = [
  //Fetch succeed
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "user1", username: "test1" },
        { id: 2, name: "user2", username: "test2" },
        { id: 3, name: "user3", username: "test3" },
      ])
    );
  }),
  //Fetch failed
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
