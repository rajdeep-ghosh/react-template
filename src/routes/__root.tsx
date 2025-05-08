import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootLayout
});

function RootLayout() {
  return (
    <>
      <div>Hello "__root"!</div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
