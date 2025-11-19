import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import homeImg from '/img/home.svg'
import bkuImg from '/img/bku.svg'
import toanImg from '/img/toan.jpg'

export const Route = createFileRoute('/_layout/')({
  component: App,
})

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // animate only once
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function HeroSection() {
  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bkuImg})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-wood bg-cover opacity-80 mix-blend-multiply backdrop-blur-3xl" />

      <div className="relative z-10 w-full h-full mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <div className="max-w-3xl space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="font-bold leading-[0.9] text-yellow text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Lost and Found
            <br />
            Station
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            The on-campus support to bring belongings back to their owners.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white">
              We have returned
              <span className="inline-flex h-12 sm:h-14 md:h-16 lg:h-20 min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4.5rem] lg:min-w-[5rem] items-center justify-center border-2 border-yellow mx-3 sm:mx-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow">
                20
              </span>
              items back home.
            </p>
            <button className="rounded-full bg-yellow px-10 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 lg:py-8 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black shadow-lg transition duration-300 ease-in-out hover:brightness-110 cursor-pointer">
              Join our journey
            </button>
          </div>
        </div>

        <div className="relative hidden md:flex flex-shrink-0 items-center justify-center flex-1">
          <div className="flex h-80 sm:h-96 md:h-[500px] lg:h-[600px] w-80 sm:w-96 md:w-[500px] lg:w-[600px] items-center justify-center rounded-full drop-shadow">
            <img
              src={homeImg}
              alt="Lost and found illustration"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
function IntroSection() {
  const { ref, isVisible } = useScrollFadeIn()

  return (
    <section className="bg-neutral-100 py-12 sm:py-16 md:py-24 px-6 sm:px-8 md:px-12 min-h-100 relative">
      <div
        ref={ref}
        className={
          'mx-auto max-w-4xl space-y-6 sm:space-y-8 text-gray-800 transition-all duration-700 ease-out ' +
          (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8')
        }
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Welcome to Lost and Found Station!
        </h2>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Lost and Found Station is a web platform that helps students and staff
          at HCMUT report, track, and reclaim lost belongings on campus. Instead
          of posting in random groups or walking around to ask, users can
          centralize everything in one place.
        </p>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const { ref, isVisible } = useScrollFadeIn()

  return (
    <section className="bg-neutral-200 py-12 sm:py-16 md:py-24 px-6 sm:px-8 md:px-12 min-h-100 relative">
      <div
        ref={ref}
        className={
          'mx-auto max-w-5xl transition-all duration-700 ease-out ' +
          (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8')
        }
      >
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          How it works
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow-2xl duration-300 cursor-pointer">
            <span className="mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-yellow text-base sm:text-lg font-semibold text-black">
              1
            </span>
            <h3 className="mb-3 text-lg sm:text-xl font-semibold">Report</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Lost or found something? Create a report with photos, location,
              and time so everyone can see it.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow-2xl duration-300 cursor-pointer">
            <span className="mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-yellow text-base sm:text-lg font-semibold text-black">
              2
            </span>
            <h3 className="mb-3 text-lg sm:text-xl font-semibold">Match</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Our system and community help match lost reports with found items
              based on details you provide.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow-2xl duration-300 cursor-pointer">
            <span className="mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-yellow text-base sm:text-lg font-semibold text-black">
              3
            </span>
            <h3 className="mb-3 text-lg sm:text-xl font-semibold">Return</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Arrange a meet-up at the Lost &amp; Found Station to verify
              ownership and return belongings safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutUsSection() {
  const { ref, isVisible } = useScrollFadeIn()

  return (
    <section className="bg-neutral-300 py-12 sm:py-16 md:py-24 px-6 sm:px-8 md:px-12">
      <div
        ref={ref}
        className={
          'mx-auto max-w-5xl text-center transition-all duration-700 ease-out ' +
          (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8')
        }
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 uppercase">
          About Us
        </h2>

        <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          We are a team of Computer Science students from Ho Chi Minh City
          University of Technology (HCMUT), building the Lost &amp; Found
          Station for our Professional Skills for Engineers course.
        </p>

        {/* Team circles */}
        <div className="mt-10 sm:mt-14 md:mt-16 grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-4 sm:grid-cols-2 justify-items-center">
          {/* Member 1 */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img
                src={toanImg}
                alt="Member 1"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              Member 1
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Product Lead</p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img
                src={toanImg}
                alt="Member 2"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              Member 2
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Frontend</p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img
                src={toanImg}
                alt="Member 3"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              Member 3
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Backend</p>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img
                src={toanImg}
                alt="Member 4"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              Member 4
            </p>
            <p className="text-xs sm:text-sm text-gray-500">UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="bg-cloudwhite">
      <HeroSection />
      <IntroSection />
      <HowItWorksSection />
      <AboutUsSection />
    </main>
  )
}
