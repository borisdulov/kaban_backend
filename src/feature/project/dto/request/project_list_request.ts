import { Static, t } from "elysia";
import { ProjectResponseValidation } from "../response/project_response";

export const ProjectsListDTO = t.Array(ProjectResponseValidation);
export type ProjectsListType = Static<typeof ProjectsListDTO>;