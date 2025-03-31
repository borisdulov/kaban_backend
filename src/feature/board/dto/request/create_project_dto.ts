import { Static, t } from "elysia";
import { ProjectPrivacy } from "../../domain/entity/board_privacy";

export const CreateProjectValidation = t.Object({
  name: t.String(),
  description: t.Optional(t.String()),
  owner: t.String(),
  // members: t.Optional(t.Array(t.String({ format: 'mongo-object-id'}))),
  privacy: t.Optional(t.Enum(ProjectPrivacy)),
});

export type CreateProjectDTO = Static<typeof CreateProjectValidation>;
