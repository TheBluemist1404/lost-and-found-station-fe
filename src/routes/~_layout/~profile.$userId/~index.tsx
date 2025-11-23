import { createFileRoute } from '@tanstack/react-router'
// import { useState } from 'react'
// import type { ReactNode } from 'react'
import bkuImg from '/img/bku.svg'
import toanImg from '/img/toan.jpg'
import editIcon from '/icon/edit.svg'

export const Route = createFileRoute('/_layout/profile/$userId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()

  const user = {
    name: 'Toan Phan',
    username: 'toan.phankt0106',
    email: 'toan.phankt0106@hcmut.edu.vn',
    memberSince: '2025',
    itemsFound: 3,
    itemsLost: 0,
  }

  // const [notifyReply, setNotifyReply] = useState(true)
  // const [notifyFound, setNotifyFound] = useState(false)
  // const [notifyVerified, setNotifyVerified] = useState(true)

  return (
    <div className="flex min-h-screen bg-cloudwhite text-wood">
      {/* SIDEBAR */}
      <aside className="fixed z-15 left-0 top-0 w-64 h-full pt-24 bg-linear-to-b from-cloudwhite/40 to-wood/10 backdrop-blur-[15px] overflow-visible">
        <nav className="mt-4 flex flex-col">
          <SidebarItem href="#accounts" label="Accounts" active />
          <SidebarItem href="#notifications" label="Notifications" />
          <SidebarItem href="#support" label="Support" />
          <SidebarItem href="#history" label="History" />
        </nav>
      </aside>

      {/* PAGE TITLE */}
      <h2 className="flex pl-70 pt-24 text-8xl font-bold tracking-tight text-wood">
        Settings
      </h2>

      {/* PROFILE HEADER STRIP */}
      <section
        className="absolute z-10 top-60 left-0 w-full h-80 overflow-visible bg-cover bg-center"
        style={{ backgroundImage: `url(${bkuImg})` }}
      >
        <div className="absolute inset-0 bg-wood opacity-90" />

        <div className="flex relative z-10 h-full items-center px-6 md:px-10 lg:px-16 gap-8">
          {/* avatar */}
          <div className="relative pl-100 pt-30">
            <div className="flex h-100 w-100 rounded-full bg-wood overflow-clip">
              <img src={toanImg} className="h-full w-full object-cover" />
            </div>
            <button
              type="button"
              className="absolute bottom-9 right-11 flex h-12 w-12 items-center justify-center rounded-full bg-wood shadow-xl cursor-pointer"
            >
              <img src={editIcon} alt="Edit" className="h-4 w-4" />
            </button>
          </div>

          {/* info */}
          <div className="flex flex-1 flex-col gap-2 text-white">
            <div className="flex flex-col gap-3">
              <h2 className="flex items-end text-3xl sm:text-4xl lg:text-7xl font-bold text-shadow-xl text-[#ffd627]">
                {user.name}
                <img
                  src={editIcon}
                  alt="Edit"
                  className="h-4 w-4 ml-2 mb-1 cursor-pointer"
                />
              </h2>
              <span className="text-sm sm:text-base opacity-80 pl-3">
                {user.username} · User id: {userId} · Member since{' '}
                {user.memberSince}
              </span>
            </div>

            <div className="mt-2 flex flex-col gap-1 pl-3 text-sm sm:text-base">
              <span>{user.itemsFound} items found</span>
              <span>{user.itemsLost} item lost</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
    </div>
  )
}

/* ---------- small subcomponents ---------- */

type SidebarItemProps = {
  href: string
  label: string
  active?: boolean
}

function SidebarItem({ href, label, active }: SidebarItemProps) {
  return (
    <a
      href={href}
      className={[
        'px-8 py-4 text-[24px] font-bold transition-colors',
        active
          ? 'text-wood underline underline-offset-10'
          : 'text-wood hover:[background-image:linear-gradient(to_right,rgb(249,250,251,0.01),rgb(46,38,0,0.3))] transition duration-300 ease-in-out',
      ].join(' ')}
    >
      {label}
    </a>
  )
}

// function SectionHeading({ title }: { title: string }) {
//   return (
//     <div className="flex items-center gap-4">
//       <h2 className="text-2xl md:text-3xl font-extrabold text-[#3a2f08]">
//         {title}
//       </h2>
//       <div className="h-px flex-1 bg-[#3a2f08]" />
//     </div>
//   )
// }

// type NotificationRowProps = {
//   label: string
//   checked: boolean
//   onChange: () => void
// }

// function NotificationRow({ label, checked, onChange }: NotificationRowProps) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span className="text-sm text-gray-700 md:text-base">{label}</span>
//       <button
//         type="button"
//         onClick={onChange}
//         className={[
//           'flex h-7 w-12 items-center rounded-full border-2 transition-colors',
//           checked ? 'border-[#f2c300] bg-[#f2c300]' : 'border-gray-400 bg-gray-400',
//         ].join(' ')}
//       >
//         <span
//           className={[
//             'h-5 w-5 rounded-full bg-white shadow transition-transform',
//             checked ? 'translate-x-5' : 'translate-x-0',
//           ].join(' ')}
//         />
//       </button>
//     </div>
//   )
// }

// function HeaderCell({ children }: { children: ReactNode }) {
//   return (
//     <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide">
//       {children}
//     </th>
//   )
// }

// function BodyCell({
//   children,
//   className = '',
// }: {
//   children: ReactNode
//   className?: string
// }) {
//   return (
//     <td className={`px-6 py-3 text-sm text-gray-800 border-t border-gray-200 ${className}`}>
//       {children}
//     </td>
//   )
// }
