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
          observer.unobserve(entry.target)
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
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-wood opacity-90 backdrop-blur-3xl" />

      <div className="relative z-10 w-full h-full flex flex-row items-stretch justify-between gap-12 px-40">
        <div className="flex flex-col flex-1 justify-center gap-40">
          <div className="flex flex-col justify-between items center gap-8">
            <h1 className="font-bold text-yellow text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
              Lost and Found Station
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white">
              The on-campus support to bring belongings back to their owners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <p className="flex flex-row text-white text-base sm:text-lg lg:text-2xl xl:text-3xl gap-2 items-center">
              <span>We</span>
              <span>have</span>
              <span>returned</span>
              <span className="p-2 mx-2 border-2 border-yellow text-yellow font-semibold text-base sm:text-lg md:text-2xl">
                20
              </span>
              <span>items</span>
              <span>back</span>
              <span>home.</span>
            </p>

            <button className="flex-shrink-0 px-6 rounded-md bg-yellow text-black text-lg sm:text-xl font-medium shadow-lg transition duration-300 ease-in-out hover:brightness-110 cursor-pointer mx-2 py-3">
              Join our journey
            </button>
          </div>
        </div>

        <div className="relative hidden md:flex flex-[0.7] max-w-4xl items-center justify-center">
          <img
            src={homeImg}
            alt="Lost and found illustration"
            className="w-full object-contain"
          />
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
        <h2 className="font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl">
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
              Contact the finder or owner through the contacts provided to
              arrange the return of the item.
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
