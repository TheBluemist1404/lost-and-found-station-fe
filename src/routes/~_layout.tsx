import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from './header'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-screen h-screen flex flex-col background-gradient">
      <Header />
      <Outlet />
    </div>
  )
}
