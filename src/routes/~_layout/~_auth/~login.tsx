import { Link, createFileRoute } from '@tanstack/react-router'
import homeImg from '/img/home.svg'
import bkuImg from '/img/bku.svg'
import arrowIcon from '/icon/arrow-turn-backward.svg'
import userIcon from '/icon/user.svg'
import lockIcon from '/icon/lock.svg'
import googleIcon from '/icon/google.svg'

export const Route = createFileRoute('/_layout/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full bg-cloudwhite">
      {/* LEFT */}
      <Link
        to="/"
        className="absolute top-25 left-6 sm:left-8 md:left-10 z-10 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
      >
        <img src={arrowIcon} alt="Back" className="h-4 w-4 md:h-5 md:w-5" />
        <span className="underline-offset-2 hover:underline">
          Return to homepage
        </span>
      </Link>

      <div className="flex flex-1 flex-col bg-cloudwhite px-8 py-8 lg:px-20 lg:py-14 justify-center items-center">
        <div className="max-w-md">
          <h1 className="mb-8 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#3b2f09]">
            Log in
          </h1>

          <form className="space-y-6 sm:space-y-8">
            {/* Username */}
            <div className="flex items-center">
              <img
                src={userIcon}
                alt="Username"
                className="h-5 w-5 text-gray mr-2"
              />
              <input
                id="username"
                type="text"
                className="flex-1 border-b border-gray-300 bg-transparent p-2 text-base outline-none focus:border-gray focus:text-gray-900 focus:shadow-sm"
                placeholder="Email or Username"
              />
            </div>

            {/* Password */}
            <div className="flex items-center">
              <img
                src={lockIcon}
                alt="Password"
                className="h-5 w-5 text-gray mr-2"
              />
              <input
                id="password"
                type="password"
                className="flex-1 border-b border-gray-300 bg-transparent p-2 text-base outline-none focus:border-gray focus:text-gray-900 focus:shadow-sm"
                placeholder="Password"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-yellow flex-grow px-12 py-3 text-sm font-semibold text-black shadow-md transition hover:brightness-110 cursor-pointer sm:flex-grow-0 sm:px-16 sm:min-w-[300px] md:px-20"
              >
                Log in
              </button>

              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>or join from</span>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm cursor-pointer hover:shadow-md transition"
                >
                  <img src={googleIcon} alt="Google" />
                </button>
              </div>
            </div>
          </form>

          <p className="mt-8 sm:mt-10 text-sm text-gray-600 justify-center flex">
            Haven't had an account yet?
            <Link
              to="/signup"
              className="font-medium text-gray-800 underline-offset-2 pl-2 hover:underline"
            >
              Sign up here.
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="relative hidden bg-cover bg-center md:block md:w-1/2"
        style={{ backgroundImage: `url(${bkuImg})` }}
      >
        <div className="absolute inset-0 bg-wood/80" />

        <div className="relative z-10 flex h-full items-center justify-center p-10">
          <div className="flex items-center justify-center rounded-full w-full lg:max-w-[900px]">
            <img
              src={homeImg}
              alt="Lost and found illustration"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
