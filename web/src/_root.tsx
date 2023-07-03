import { RootRoute, Outlet } from "@tanstack/router";

export const rootRoute = new RootRoute({
  component: () => <Outlet />,
});
