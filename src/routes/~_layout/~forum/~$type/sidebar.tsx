import mapImg from '/img/map.png'

const categories = [
  { name: 'Electronic Devices', count: 8 },
  { name: 'Parking cards', count: 22 },
  { name: 'Document', count: 5 },
  { name: 'Bags', count: 10 },
  { name: 'Keys', count: 12 },
  { name: 'Accessories', count: 2 },
  { name: 'Clothes & Shoes', count: 3 },
  { name: 'Sports Equipment', count: 11 },
  { name: 'Other', count: 18 },
]

export default function SideBar() {
  return (
    <div className="w-[260px] h-full px-10 py-6 bg-white border-r border-[#e2d8c9]">
      {/* TAGS */}
      <h2 className="text-[#3b2b0b] text-2xl font-semibold mb-3">Tags</h2>
      <hr className="border-t border-[#e2d8c9] mb-5" />

      <ul className="space-y-1">
        {categories.map((cat) => (
          <li
            key={cat.name}
            className="flex items-center justify-between text-sm font-light cursor-pointer"
          >
            <span className="text-[#e2716d]">{cat.name}</span>
            <span className="ml-2 rounded-full bg-[#f3ebe1] px-2 py-0.5 text-[10px] text-[#7b5b1e]">
              {cat.count}
            </span>
          </li>
        ))}
      </ul>

      {/* DATE & TIME */}
      <div className="mt-8">
        <h2 className="text-[#3b2b0b] text-2xl font-semibold mb-3">
          Date &amp; Time
        </h2>
        <hr className="border-t border-[#e2d8c9] mb-6" />

        <div className="space-y-6 text-sm">
          {/* From */}
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] md:items-start gap-y-2 md:gap-y-0 md:gap-x-4">
            <span className="text-[#e2716d]">From:</span>
            <div className="flex flex-col items-start gap-2">
              <input
                type="date"
                defaultValue="2025-10-10"
                className="w-[170px] rounded-md bg-[#3b2b0b] px-3 py-1 text-xs text-white text-center
                           [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-[#e2716d]"
              />
              <input
                type="time"
                defaultValue="20:30"
                className="w-[170px] rounded-md bg-[#3b2b0b] px-3 py-1 text-xs text-white text-center
                           [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-[#e2716d]"
              />
            </div>
          </div>

          {/* To */}
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] md:items-start gap-y-2 md:gap-y-0 md:gap-x-4">
            <span className="text-[#e2716d]">To:</span>
            <div className="flex flex-col items-start gap-2">
              <input
                type="date"
                defaultValue="2025-10-15"
                className="w-[170px] rounded-md bg-[#3b2b0b] px-3 py-1 text-xs text-white text-center
                           [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-[#e2716d]"
              />
              <input
                type="time"
                defaultValue="21:30"
                className="w-[170px] rounded-md bg-[#3b2b0b] px-3 py-1 text-xs text-white text-center
                           [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-[#e2716d]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION */}
      <div className="mt-10">
        <h2 className="text-[#3b2b0b] text-2xl font-semibold mb-3">Location</h2>
        <hr className="border-t border-[#e2d8c9] mb-4" />

        <img src={mapImg} alt="Location map" className="w-full h-auto" />
      </div>
    </div>
  )
}
