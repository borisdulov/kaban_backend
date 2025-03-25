import { Static, t } from "elysia";
import { ProjectPrivacy } from "../../domain/entity/project_privacy_enum";

export const ProjectResponseValidation = t.Object({
    _id: t.String(),
    name: t.String(),
    description: t.Optional(t.String()),
    createdAt: t.Date(),
    updatedAt: t.Date(),
    owner: t.String(), 
    members: t.Array(t.String()), 
    privacy: t.Enum(ProjectPrivacy)
  });
  
  export type ProjectResponseDTO = Static<typeof ProjectResponseValidation>;
  