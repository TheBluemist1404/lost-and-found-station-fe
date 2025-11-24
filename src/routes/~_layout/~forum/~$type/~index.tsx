import { createFileRoute, notFound } from '@tanstack/react-router'
import LostFoundCard from '../../../../components/LostFoundCard'
import SideBar from './sidebar'
import type { LostFoundItem } from '../../../../components/LostFoundCard'
import searchIcon from '/icon/search.svg'
import type { ChangeEvent } from 'react'
import lostIcon from '/icon/Subtract.svg'
import foundIcon from '/icon/Found.svg'

const activeFilters = [
  'Bags',
  '20:30, Oct 10, 2025 - 21:30, Oct 15, 2025',
  'B4',
]

const mockItems: Array<LostFoundItem> = [
  {
    id: 1,
    title: 'IP17PM',
    person: 'Founder’s name',
    time: '15:30 – June 1, 2025',
    tag: 'Electronic Devices',
    location: 'B4',
    description:
      'Shit it gone sb help Shit it gone sb help Shit it gone sb help...',
    imageUrl: '/img/losts.png',
  },
  {
    id: 2,
    title: 'IP17PM',
    person: 'Founder’s name',
    time: '15:30 – June 1, 2025',
    tag: 'Electronic Devices',
    location: 'B4',
    description:
      'Shit it gone sb help Shit it gone sb help Shit it gone sb help...',
    imageUrl: '/img/losts.png',
  },
  {
    id: 3,
    title: 'IP17PM',
    person: 'Founder’s name',
    time: '15:30 – June 1, 2025',
    tag: 'Electronic Devices',
    location: 'B4',
    description:
      'Shit it gone sb help Shit it gone sb help Shit it gone sb help...',
    imageUrl: '/img/losts.png',
  },
  {
    id: 4,
    title: 'IP17PM',
    person: 'Founder’s name',
    time: '15:30 – June 1, 2025',
    tag: 'Electronic Devices',
    location: 'B4',
    description:
      'Shit it gone sb help Shit it gone sb help Shit it gone sb help...',
    imageUrl: '/img/losts.png',
  },
]

export const Route = createFileRoute('/_layout/forum/$type/')({
  component: RouteComponent,
  loader: ({ params }) => {
    const { type } = params
    if (type !== 'lost' && type !== 'found') {
      throw notFound()
    }
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
      <div className="bg-white flex-1 flex flex-col pr-38 pl-20 pt-7">
        <p className="text-[86px] font-medium">
          {params.type == 'lost' ? 'Lost' : 'Found'} Items
        </p>

        {/* search + button */}
        <div className="flex flex-row justify-between mt-2.5 gap-10 ">
          <div className="border-1 rounded-sm flex-1 flex gap-4 p-3">
            <img src={searchIcon} alt="search icon" />
            <input
              type="text"
              className="flex-1 focus:outline-none"
              placeholder="Search for items..."
              onChange={handleChange}
            />
          </div>
          <button
            className={`${
              params.type == 'lost' ? 'bg-red-500' : 'bg-green-500'
            } flex flex-row justify-between items-center gap-6 ${
              params.type == 'lost'
                ? 'bg-[linear-gradient(90deg,_#2E2600,_#DC3636)]'
                : 'bg-[linear-gradient(90deg,_#5ABE84,_#000000)]'
            } text-white rounded-md px-4 py-2 w-34`}
          >
            <p>{params.type == 'lost' ? 'Lost' : 'Found'}</p>
            <img
              className="size-8"
              src={params.type === 'lost' ? lostIcon : foundIcon}
              alt=""
            />
          </button>
        </div>

        {/* filter chips */}
        <div className="mt-4 flex flex-wrap gap-3">
          {activeFilters.map((filter) => (
            <button
              key={filter}
              className="inline-flex items-center gap-2 rounded-full bg-[#FFE2E2] px-3 py-1 text-xs font-medium text-[#C95A5A]"
            >
              <span>{filter}</span>
              <span className="text-xs">&times;</span>
            </button>
          ))}
        </div>

        {/* items grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8">
          {mockItems.map((item) => (
            <LostFoundCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
