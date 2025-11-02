import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/profile/$userId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()
  return <div>Hello user with id {userId}</div>
}
