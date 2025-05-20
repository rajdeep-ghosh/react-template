import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout
});

function RootLayout() {
  return (
    <>
      <div>Hello "__root"!</div>
      <Outlet />
    </>
  );
}
