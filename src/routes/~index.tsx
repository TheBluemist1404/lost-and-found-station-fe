import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className='text-4xl font-bold'>Tic Tac Toe</h1>
      <div className='flex flex-row gap-4 '>
        <button>Play</button>
        <button>Join a room</button>
      </div>
    </div>
  )
}
