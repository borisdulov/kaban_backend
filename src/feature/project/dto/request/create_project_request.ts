import { Static, t } from "elysia";
import { ProjectPrivacy } from "../../domain/entity/project_privacy_enum";

export const CreateProjectValidation = t.Object({
  name: t.String(),
  description: t.Optional(t.String()),
  owner: t.String(), 
  members: t.Optional(t.Array(t.String())), 
  privacy: t.Optional(t.Enum(ProjectPrivacy)) 
});

export type CreateProjectDTO = Static<typeof CreateProjectValidation>;