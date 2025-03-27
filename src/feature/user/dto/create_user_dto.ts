import { Static, t } from "elysia";

export const CreateUserValidation = t.Object({
  name: t.String(),
  email: t.String({ format: "email" }),
  login: t.String(),
  username: t.String(),
  bio: t.Optional(t.String()),
  avatar: t.Optional(t.String()),
  projectsIds: t.Optional(t.Array(t.String())),
});

export type CreateUserDTO = Static<typeof CreateUserValidation>;
