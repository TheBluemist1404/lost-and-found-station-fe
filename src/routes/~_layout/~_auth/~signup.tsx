import { Link, createFileRoute } from '@tanstack/react-router'
import homeImg from '/img/home.svg'
import bkuImg from '/img/bku.svg'
import arrowIcon from '/icon/arrow-turn-backward.svg'
import mailIcon from '/icon/mail.svg'
import userIcon from '/icon/user.svg'
import lockIcon from '/icon/lock.svg'
import googleIcon from '/icon/google.svg'

export const Route = createFileRoute('/_layout/_auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-screen bg-cloudwhite">
      {/* LEFT */}
      <Link
        to="/"
        className="absolute top-25 left-10 mb-10 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
      >
        <img src={arrowIcon} alt="Back" className="h-4 w-4 md:h-5 md:w-5" />
        <span className="underline-offset-2 hover:underline">
          Return to homepage
        </span>
      </Link>

      <div className="flex w-full flex-col bg-cloudwhite px-8 py-8 md:w-1/2 lg:px-20 lg:py-14 justify-center items-center">
        <div className="max-w-md">
          <h1 className="mb-10 text-5xl font-semibold leading-tight text-[#3b2f09]">
            Create an account
          </h1>

          <form className="space-y-8">
            {/* Email */}
            <div className="relative">
              <img
                src={mailIcon}
                alt="Email"
                className="pointer-events-none absolute left-0 top-1/2 h-5 w-5 -translate-y-2 translate-x-2 text-gray"
              />
              <input
                id="email"
                type="email"
                className="w-full h-10 border-b border-gray-300 bg-transparent py-2 pl-10 text-base outline-none focus:border-gray focus:text-gray-900 focus:shadow-sm"
                placeholder="Email"
              />
            </div>

            {/* Username */}
            <div className="relative">
              <img
                src={userIcon}
                alt="Username"
                className="pointer-events-none absolute left-0 top-1/2 h-5 w-5 -translate-y-2 translate-x-2 text-gray"
              />
              <input
                id="username"
                type="text"
                className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 pl-10 text-base outline-none focus:border-gray focus:text-gray-900 focus:shadow-sm"
                placeholder="Username"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <img
                src={lockIcon}
                alt="Password"
                className="pointer-events-none absolute left-0 top-1/2 h-5 w-5 -translate-y-2 translate-x-2 text-gray"
              />
              <input
                id="password"
                type="password"
                className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 pl-10 text-base outline-none focus:border-gray focus:text-gray-900 focus:shadow-sm"
                placeholder="Password"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-full w-75 bg-yellow px-10 py-3 text-sm font-semibold text-black shadow-md transition hover:brightness-110 cursor-pointer"
              >
                Sign up
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

          <p className="mt-10 text-sm text-gray-600 justify-center flex">
            Already have an account?
            <Link
              to="/login"
              className="font-medium text-gray-800 underline-offset-2 pl-2 hover:underline"
            >
              Log in here.
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="relative hidden w-1/2 bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${bkuImg})` }}
      >
        <div className="absolute inset-0 bg-wood/80" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="flex items-center justify-center rounded-full w-200">
            <img
              src={homeImg}
              alt="Lost and found illustration"
              className="h-[100%] w-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
