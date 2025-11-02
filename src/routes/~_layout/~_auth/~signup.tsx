import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/signup"!</div>
}
