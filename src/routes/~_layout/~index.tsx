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

      <div className="relative z-10 w-full m-auto flex min-h-full max-w-7xl items-center justify-between px-12 gap-8">
        <div className="max-w-xl space-y-8">
          <h1 className="font-bold leading-[1] text-yellow text-[4.5rem]">
            Lost and Found Station
          </h1>

          <p className="text-lg text-white">
            The on-campus support to bring belongings back to their owners.
          </p>

          <div className="flex flex-wrap items-center gap-8">
            <p className="text-white">
              We have returned
              <span className="inline-flex h-10 min-w-[3.5rem] items-center justify-center border-2 border-yellow mx-3 text-xl font-semibold text-yellow">
                20
              </span>
              items back home.
            </p>
            <button className="rounded bg-yellow px-10 py-4 text-base font-semibold text-black shadow-lg transition duration-300 ease-in-out hover:brightness-110 cursor-pointer">
              Join our journey
            </button>
          </div>
        </div>

        <div className="relative hidden lg:flex flex-shrink-0 items-center justify-center">
          <div className="flex h-[480px] w-[480px] items-center justify-center rounded-full drop-shadow">
            <img
              src={homeImg}
              alt="Lost and found illustration"
              className="h-[100%] w-[100%] object-contain"
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
    <section className="bg-neutral-100 py-24 min-h-100 relative">
      <div
        ref={ref}
        className={
          'mx-auto max-w-4xl space-y-8 text-gray-800 transition-all duration-700 ease-out ' +
          (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8')
        }
      >
        <h2 className="text-3xl font-semibold text-gray-900">
          Welcome to Lost and Found Station!
        </h2>

        <p className="text-lg leading-relaxed">
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
    <section className="bg-neutral-200 py-24 min-h-100 relative">
      <div
        ref={ref}
        className={
          'mx-auto max-w-5xl transition-all duration-700 ease-out ' +
          (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8')
        }
      >
        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
          How it works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow-2xl duration-300 cursor-pointer">
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow text-sm font-semibold text-black">
              1
            </span>
            <h3 className="mb-2 text-lg font-semibold">Report</h3>
            <p className="text-sm text-gray-700">
              Lost or found something? Create a report with photos, location,
              and time so everyone can see it.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow-2xl duration-300 cursor-pointer">
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow text-sm font-semibold text-black">
              2
            </span>
            <h3 className="mb-2 text-lg font-semibold">Match</h3>
            <p className="text-sm text-gray-700">
              Our system and community help match lost reports with found items
              based on details you provide.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow-2xl duration-300 cursor-pointer">
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow text-sm font-semibold text-black">
              3
            </span>
            <h3 className="mb-2 text-lg font-semibold">Return</h3>
            <p className="text-sm text-gray-700">
              Arrange a meet-up at the Lost &amp; Found Station to verify
              ownership and return belongings safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- About Us section ---
function AboutUsSection() {
  const { ref, isVisible } = useScrollFadeIn()

  return (
    <section className="bg-neutral-300 py-24">
      <div
        ref={ref}
        className={
          'mx-auto max-w-5xl text-center transition-all duration-700 ease-out ' +
          (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8')
        }
      >
        <h2 className="text-3xl font-semibold text-gray-900 uppercase">
          About Us
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-700">
          We are a team of Computer Science students from Ho Chi Minh City
          University of Technology (HCMUT), building the Lost &amp; Found
          Station for our Professional Skills for Engineers course.
        </p>

        {/* Team circles */}
        <div className="mt-12 grid gap-10 md:grid-cols-4 sm:grid-cols-2 justify-items-center">
          {/* Member 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-32 w-32 rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img
                src={toanImg}
                alt="Member 1"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-gray-900">Member 1</p>
            <p className="text-xs text-gray-500">Product Lead</p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-32 w-32 rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img
                src={toanImg}
                alt="Member 2"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-gray-900">Member 2</p>
            <p className="text-xs text-gray-500">Frontend</p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-32 w-32 rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img
                src={toanImg}
                alt="Member 3"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-gray-900">Member 3</p>
            <p className="text-xs text-gray-500">Backend</p>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-32 w-32 rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img
                src={toanImg}
                alt="Member 4"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-gray-900">Member 4</p>
            <p className="text-xs text-gray-500">UI/UX</p>
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
