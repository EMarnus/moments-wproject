import { rest } from "msw";

const baseURL = "https://learn-django-rest-8c1f3578007f.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "Emile",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image: "https://res.cloudinary.com/diprs8c6p/image/upload/v1/media/../default_profile"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];