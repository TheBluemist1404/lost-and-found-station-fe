import { createFileRoute, notFound } from '@tanstack/react-router'
import SideBar from './sidebar'
import searchIcon from '/icon/search.svg'
import type { ChangeEvent } from 'react'

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
  const params = Route.useParams()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div className="flex flex-row w-full h-full ">
      <SideBar />
      <div className="bg-white flex-1 flex flex-col px-38 py-5">
        <p>{params.type} Report</p>

        <div className="flex flex-row justify-between mt-5 gap-10 ">
          <div className="border-1 rounded-sm flex-1 flex gap-4 p-3">
            <img src={searchIcon} alt="search icon" className="" />
            <input
              type="text"
              className="flex-1 focus:outline-none"
              placeholder="Search for items..."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            className={`${params.type == 'lost' ? 'bg-red-500' : 'bg-green-500'}`}
          >
            {params.type}
          </button>
        </div>
      </div>
    </div>
  )
}
