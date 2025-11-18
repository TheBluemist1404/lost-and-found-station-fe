import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from './header'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header />
      <div className="w-screen h-screen pt-[88px] flex flex-col">
        <Outlet />
      </div>
    </>
  )
}
