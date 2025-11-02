import { createFileRoute, notFound } from '@tanstack/react-router'
import SideBar from './sidebar'

export const Route = createFileRoute('/_layout/forum/$type/')({
  component: RouteComponent,
  loader: ({ params }) => {
    const { type } = params
    if (type !== 'lost' && type !== 'found') {
      throw notFound()
    }
    // Proceed with loading data for valid types
    return { type }
  },
})

function RouteComponent() {
  // const params = Route.useParams();

  return (
    <div className="flex flex-row w-full h-full ">
      <SideBar />
    </div>
  )
}
