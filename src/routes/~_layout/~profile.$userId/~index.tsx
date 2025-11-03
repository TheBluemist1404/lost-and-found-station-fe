import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/profile/$userId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()
  return (
    <div>
      <p>Hello user with id {userId}</p>
      <select name="" id="" className="bg-white p-2 ">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
    </div>
  )
}
