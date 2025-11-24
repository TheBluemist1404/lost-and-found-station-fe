import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ReactNode } from 'react'
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

  const [notifyReply, setNotifyReply] = useState(true)
  const [notifyFound, setNotifyFound] = useState(false)
  const [notifyVerified, setNotifyVerified] = useState(true)
  const [problemText, setProblemText] = useState('')

  return (
    <div className="flex bg-cloudwhite text-wood">
      {/* SIDEBAR */}
      <aside className="fixed z-15 left-0 top-0 w-64 h-full pt-24 bg-linear-to-b from-cloudwhite/40 to-wood/10 backdrop-blur-[15px] overflow-visible">
        <h2 className="flex px-8 py-4 text-4xl font-bold tracking-tight text-wood">
          Settings
        </h2>
        <nav className="mt-4 flex flex-col">
          <SidebarItem href="#accounts" label="Accounts" />
          <SidebarItem href="#notifications" label="Notifications" />
          <SidebarItem href="#support" label="Support" />
          <SidebarItem href="#history" label="History" />
        </nav>
      </aside>

      {/* PROFILE HEADER STRIP */}
      <section
        className="absolute z-10 top-45 left-0 w-full h-75 overflow-visible bg-cover bg-center"
        style={{ backgroundImage: `url(${bkuImg})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#47401E] to-wood opacity-90" />

        <div className="flex relative z-10 h-full items-center pl-70 md:pl-80 lg:pl-90 xl:pl-100 gap-8">
          {/* avatar */}
          <div className="hidden lg:flex relative pt-30">
            <div className="flex h-90 w-90 rounded-full bg-wood overflow-clip">
              <img src={toanImg} className="h-full w-full object-cover" />
            </div>
            <button
              type="button"
              className="absolute bottom-7 right-9 flex h-12 w-12 items-center justify-center rounded-full bg-wood shadow-xl cursor-pointer"
            >
              <img src={editIcon} alt="Edit" className="h-4 w-4" />
            </button>
          </div>

          {/* info */}
          <div className="flex flex-1 flex-col gap-2 text-white">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-shadow-xl text-yellow">
                <span className="whitespace-nowrap">{user.name}</span>
                <img
                  src={editIcon}
                  alt="Edit"
                  className="hidden lg:inline-block h-4 w-4 ml-2 mb-1 align-bottom cursor-pointer"
                />
              </h2>
              <span className="text-sm sm:text-base opacity-80 pl-2">
                {user.username} · id: {userId} · since {user.memberSince}
              </span>
            </div>

            <div className="mt-2 flex flex-col gap-1 pl-2 text-sm sm:text-base">
              <span>{user.itemsFound} items found</span>
              <span>{user.itemsLost} item lost</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-cloudwhite pt-130 lg:pt-150 max-w-5xl mx-auto pl-65">
        {/* CONTENT BODY */}
        <div className="px-6 pb-16">
          {/* ACCOUNTS */}
          <section id="accounts" className="mb-16">
            <SectionHeading title="ACCOUNTS" />

            {/* Email */}
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Email</h3>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-wood"
                />
              </div>

              {/* Change password */}
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">Change Password</h3>

                <input
                  type="password"
                  placeholder="Old password"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-wood"
                />
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-wood"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-wood"
                  />
                </div>
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    className="w-35 rounded-lg bg-wood px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 whitespace-nowrap cursor-pointer"
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* Sign out / Delete */}
              <div className="mt-10 space-y-8">
                <div className="flex items-center justify-between gap-8">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold">Sign out</h3>
                    <p className="text-sm text-gray-600">
                      Sign out of this device
                    </p>
                  </div>
                  <button
                    type="button"
                    className="w-35 rounded-lg bg-wood px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 whitespace-nowrap cursor-pointer"
                  >
                    Sign out
                  </button>
                </div>

                <div className="flex items-center justify-between gap-8">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold">Delete Account</h3>
                    <p className="text-sm text-gray-600">
                      Permanently delete everything associated with your
                      account.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="w-35 rounded-lg bg-red-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 whitespace-nowrap cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* NOTIFICATIONS */}
          <section id="notifications" className="mb-16">
            <SectionHeading title="NOTIFICATIONS" />

            <div className="mt-8 space-y-6">
              <h3 className="text-lg font-semibold">Get notified when:</h3>

              <NotificationRow
                label="When someone replies to your post"
                checked={notifyReply}
                onChange={() => setNotifyReply((v) => !v)}
              />
              <NotificationRow
                label="When your lost item is marked as found"
                checked={notifyFound}
                onChange={() => setNotifyFound((v) => !v)}
              />
              <NotificationRow
                label="When admin verifies your post"
                checked={notifyVerified}
                onChange={() => setNotifyVerified((v) => !v)}
              />
            </div>
          </section>

          {/* SUPPORT */}
          <section id="support" className="mb-16">
            <SectionHeading title="SUPPORT" />

            <div className="mt-8 space-y-6">
              <button
                type="button"
                className="block text-left text-base text-wood underline"
              >
                Contact us
              </button>
              <button
                type="button"
                className="block text-left text-base text-wood underline"
              >
                FAQ
              </button>

              <div className="mt-8 space-y-3">
                <h3 className="text-lg font-semibold">Report a problem</h3>
                <div className="space-y-3 rounded-md border border-wood bg-white px-4 py-3">
                  <input
                    type="text"
                    placeholder="TITLE"
                    className="w-full border-b border-gray-200 pb-2 text-xs font-semibold uppercase tracking-wide text-wood outline-none"
                  />
                  <textarea
                    rows={4}
                    placeholder="State your problem here"
                    value={problemText}
                    onChange={(e) => setProblemText(e.target.value)}
                    maxLength={1000}
                    className="w-full h-50 resize-none border-0 text-sm text-gray-700 outline-none"
                  />
                  <div className="text-xs text-gray-500 text-left">
                    {problemText.length}/1000
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    className="w-35 rounded-lg bg-wood px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 whitespace-nowrap cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* HISTORY */}
          <section id="history" className="mb-12">
            <SectionHeading title="HISTORY" />

            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 border border-wood rounded-lg bg-white text-sm overflow-hidden">
                <thead>
                  <tr className="border-b border-[#3a2f08] bg-white">
                    <HeaderCell>NUMBER</HeaderCell>
                    <HeaderCell>TYPE</HeaderCell>
                    <HeaderCell>NAME</HeaderCell>
                    <HeaderCell>TIME</HeaderCell>
                    <HeaderCell>STATUS</HeaderCell>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#f9f8f6] transition-colors">
                    <BodyCell>1</BodyCell>
                    <BodyCell className="text-red-600 font-semibold">
                      Lost
                    </BodyCell>
                    <BodyCell>IP17PM</BodyCell>
                    <BodyCell>15:30 - June 1, 2025</BodyCell>
                    <BodyCell>
                      <StatusSelect defaultValue="unclaimed" />
                    </BodyCell>
                  </tr>
                  <tr className="hover:bg-[#f9f8f6] transition-colors">
                    <BodyCell>2</BodyCell>
                    <BodyCell className="text-green-700 font-semibold">
                      Found
                    </BodyCell>
                    <BodyCell>Parking card</BodyCell>
                    <BodyCell>17:00 - October 12, 2025</BodyCell>
                    <BodyCell>
                      <StatusSelect defaultValue="claimed" />
                    </BodyCell>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

type SidebarItemProps = {
  href: string
  label: string
}

function SidebarItem({ href, label }: SidebarItemProps) {
  return (
    <a
      href={href}
      className="px-8 py-4 text-[24px] font-bold text-wood hover:[background-image:linear-gradient(to_right,rgb(249,250,251,0.01),rgb(46,38,0,0.3))] transition duration-300 ease-in-out"
    >
      {label}
    </a>
  )
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#3a2f08]">
        {title}
      </h2>
      <div className="h-px flex-1 bg-wood" />
    </div>
  )
}

type NotificationRowProps = {
  label: string
  checked: boolean
  onChange: () => void
}

function NotificationRow({ label, checked, onChange }: NotificationRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-gray-700 md:text-base">{label}</span>
      <button
        type="button"
        onClick={onChange}
        className={[
          'flex h-7 w-12 items-center rounded-full px-1 transition-colors',
          checked
            ? 'bg-yellow shadow-[inset_0_4px_2px_rgba(0,0,0,0.25)]'
            : 'bg-gray shadow-[inset_0_4px_2px_rgba(0,0,0,0.25)]',
        ].join(' ')}
      >
        <span
          className={[
            'h-6 w-6 rounded-full bg-white shadow-md transition-transform',
            checked ? 'translate-x-[1.1rem]' : 'translate-x-[-0.1rem]',
          ].join(' ')}
        />
      </button>
    </div>
  )
}

function HeaderCell({ children }: { children: ReactNode }) {
  return (
    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-center">
      {children}
    </th>
  )
}

function BodyCell({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <td className={`px-6 py-3 text-sm text-gray-800 text-center ${className}`}>
      {children}
    </td>
  )
}

type StatusSelectProps = {
  defaultValue: 'claimed' | 'unclaimed'
}

function StatusSelect({ defaultValue }: StatusSelectProps) {
  const [status, setStatus] = useState<'claimed' | 'unclaimed'>(defaultValue)

  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value as 'claimed' | 'unclaimed')}
      className="rounded-md px-3 py-2 text-sm text-gray-700 outline-none cursor-pointer hover:border-gray-400 focus:border-wood transition-colors appearance-none pr-8"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 8px center',
        paddingRight: '28px',
      }}
    >
      <option value="unclaimed">Unclaimed</option>
      <option value="claimed">Claimed</option>
    </select>
  )
}
