import { Route, Router } from "@tanstack/router";

import { rootRoute } from "./_root";
import Home from "./pages";
import LatestPosts from "./pages/latestPosts";

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const latestPostsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "recentes",
  component: LatestPosts,
});

const routeTree = rootRoute.addChildren([indexRoute, latestPostsRoute]);

export const router = new Router({
  routeTree,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
