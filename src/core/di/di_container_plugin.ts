import Elysia from "elysia";
import { createDIContainer } from "./di_container_factory";

export const DIContainerPlugin = new Elysia({
  name: "Middleware.DIContainer",
})
  .state("container", createDIContainer())
  .derive({ as: "global" }, ({ store: { container } }) => {
    return { container };
  });
