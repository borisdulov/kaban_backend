import { Static, t } from "elysia";
import { ProjectPrivacy } from "../../domain/entity/project_privacy_enum";

export const UpdateProjectValidation = t.Object({
    name: t.Optional(t.String()),
    description: t.Optional(t.String()),
    members: t.Optional(t.Array(t.String())), 
    privacy: t.Optional(t.Enum(ProjectPrivacy))
  });
  
  export type UpdateProjectDTO = Static<typeof UpdateProjectValidation>;