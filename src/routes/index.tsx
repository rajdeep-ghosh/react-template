import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RootPage
});

function RootPage() {
  return <div>Hello "index"!</div>;
}
