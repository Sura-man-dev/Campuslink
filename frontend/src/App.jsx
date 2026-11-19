import { useEffect, useState } from 'react'
import './App.css'

const photos = {
  addis:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/University_Campus_in_Addis_Ababa.jpg/1280px-University_Campus_in_Addis_Ababa.jpg',
  bahir:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/View_through_Gates_of_University_-_Bahir_Dar_-_Ethiopia_%288681131852%29.jpg/1280px-View_through_Gates_of_University_-_Bahir_Dar_-_Ethiopia_%288681131852%29.jpg',
  addisGate:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Stairs_of_the_Lion_of_Judea_in_Addis_Ababa.jpg/1280px-Stairs_of_the_Lion_of_Judea_in_Addis_Ababa.jpg',
  gondar:
    'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/University_of_Gondar%2C_Ethiopia_Maraki_to_Tewodros_Campus.jpg/1280px-University_of_Gondar%2C_Ethiopia_Maraki_to_Tewodros_Campus.jpg',
}

const heroSlides = [
  {
    image: photos.addis,
    alt: 'Students walking through the Addis Ababa University campus',
    eyebrow: 'WELCOME TO CAMPUSLINK',
    headline: 'Your campus, all in',
    emphasis: 'one place.',
    description: 'Lost and found, student-to-student marketplace, campus conversations, and events—all connected in one student community.',
    action: 'Explore CampusLink',
    href: '#how-it-works',
    title: 'Campus life, connected',
    location: 'ADDIS ABABA, ETHIOPIA',
    note: 'A thousand paths. One community.',
  },
  {
    image: photos.bahir,
    alt: 'The entrance to Bahir Dar University in Ethiopia',
    eyebrow: 'LOST & FOUND',
    headline: 'Lost something?',
    emphasis: 'Let’s find it.',
    description: 'Post a lost item or share a recent find. Help useful belongings get back to the students who need them.',
    action: 'Explore Lost & Found',
    href: '#lost-found',
    title: 'Lost & Found',
    location: 'BAHIR DAR, ETHIOPIA',
    note: 'Good things find their way.',
  },
  {
    image: photos.gondar,
    alt: 'The Maraki to Tewodros campus at the University of Gondar',
    eyebrow: 'THE CAMPUS MARKETPLACE',
    headline: 'Good finds.',
    emphasis: 'Fair prices.',
    description: 'Buy, sell, and pass on books, tech, and campus essentials with students in your community.',
    action: 'Browse the marketplace',
    href: '#marketplace',
    title: 'Student marketplace',
    location: 'GONDAR, ETHIOPIA',
    note: 'Student-to-student, close to home.',
  },
  {
    image: photos.addisGate,
    alt: 'A historic campus landmark in Addis Ababa',
    eyebrow: 'SOCIAL & CAMPUS EVENTS',
    headline: 'More campus.',
    emphasis: 'More together.',
    description: 'Share what’s happening, meet your people, and find the next celebration—from GC Day to Half Life.',
    action: 'See campus events',
    href: '#events',
    title: 'Campus community',
    location: 'MADE FOR ETHIOPIAN CAMPUSES',
    note: 'The little things bring us together.',
  },
  {
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1800&q=90',
    alt: 'University students celebrating together at an outdoor campus event',
    eyebrow: 'CAMPUS EVENTS',
    headline: 'Make memories.',
    emphasis: 'Find your people.',
    description: 'Discover student celebrations, cultural gatherings, and club events—from GC Day to Half Life.',
    action: 'Explore campus events',
    href: '/events',
    title: 'Student celebrations',
    location: 'MADE FOR STUDENT LIFE',
    note: 'Find your next campus moment.',
  },
]

const lostSlides = [
  {
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=85',
    alt: 'A notebook left behind on a desk',
    label: 'NOTEBOOK · LIBRARY',
    note: 'Found near the library',
  },
  {
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=1200&q=85',
    alt: 'A watch that could be reunited with its owner',
    label: 'WATCH · STUDENT CENTRE',
    note: 'Found at the student centre',
  },
  {
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
    alt: 'A book left on campus',
    label: 'TEXTBOOK · NORTH QUAD',
    note: 'Found outside lecture hall 2',
  },
]

const marketSlides = [
  {
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Books ready for a new student owner',
    label: 'BOOKS & STUDY',
    title: 'Great reads, passed along.',
    detail: 'Find your next favourite for less.',
  },
  {
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop and study essentials',
    label: 'TECH & GADGETS',
    title: 'Ready for your next big idea.',
    detail: 'Student-to-student tech finds.',
  },
  {
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85',
    alt: 'An everyday backpack for campus',
    label: 'CAMPUS LIFE',
    title: 'Good gear, new adventures.',
    detail: 'Give good things a new home.',
  },
]

const communitySlides = [
  {
    image: photos.gondar,
    alt: 'A green campus walkway at the University of Gondar',
    location: 'GONDAR CAMPUS',
  },
  {
    image: photos.bahir,
    alt: 'The entrance to Bahir Dar University',
    location: 'BAHIR DAR CAMPUS',
  },
  {
    image: photos.addis,
    alt: 'Students on the Addis Ababa University campus',
    location: 'ADDIS ABABA CAMPUS',
  },
]

const celebrationSlides = [
  {
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=85',
    alt: 'Students celebrating together at a university event',
    location: 'CAMPUS CELEBRATIONS',
  },
  {
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85',
    alt: 'Friends enjoying a celebration together',
    location: 'STUDENT LIFE',
  },
  {
    image: photos.addis,
    alt: 'Students sharing campus life at Addis Ababa University',
    location: 'MADE FOR YOUR CAMPUS',
  },
]

const campusEvents = [
  {
    title: 'GC Day',
    category: 'Celebration',
    campus: 'Your campus',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85',
    alt: 'University students gathering for a campus celebration',
    description: 'A day for students to come together, celebrate campus life, and make memories with their community.',
  },
  {
    title: 'Half Life Celebration',
    category: 'Celebration',
    campus: 'Your campus',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85',
    alt: 'Friends enjoying a student celebration together',
    description: 'Mark the midpoint of the academic year with classmates, music, and the campus traditions you create together.',
  },
  {
    title: 'Culture & Community Day',
    category: 'Culture',
    campus: 'Your campus',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=85',
    alt: 'A lively outdoor cultural festival',
    description: 'Celebrate the cultures, stories, food, and creative talent that make your student community unique.',
  },
  {
    title: 'Campus Club Fair',
    category: 'Clubs',
    campus: 'Student center',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85',
    alt: 'University students meeting and socializing on campus',
    description: 'Meet student organizations, find a new interest, and discover ways to get involved on campus.',
  },
]

const eventFilters = ['All events', 'Celebration', 'Culture', 'Clubs']

function ArrowIcon({ diagonal = false, className = 'size-4' }) {
  return diagonal ? (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="theme-toggle"
      onClick={onToggle}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      type="button"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20.2 15.6A8.5 8.5 0 0 1 8.4 3.8 8.5 8.5 0 1 0 20.2 15.6Z" />
        </svg>
      )}
    </button>
  )
}

function Brand({ light = false, href = '#home' }) {
  return (
    <a className={`inline-flex items-center gap-2.5 no-underline ${light ? 'text-white' : 'text-slate-950'}`} href={href} aria-label="CampusLink home">
      <img className="size-10 object-contain" src="/campuslink-logo.jpeg" alt="" width="40" height="40" />
      <span className="text-[17px] font-bold tracking-tight">campus<span className="font-medium">link</span></span>
    </a>
  )
}

function SiteHeader({ activePage, authSession, theme, onToggleTheme, onRegister, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 48)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const homePage = activePage === 'home'
  const navItems = homePage
    ? [
        { label: 'Lost & Found', href: '#lost-found' },
        { label: 'Marketplace', href: '#marketplace' },
        { label: 'Social', href: '#community' },
        { label: 'Events', href: '/events' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'Lost & Found', href: '/#lost-found' },
        { label: 'Marketplace', href: '/#marketplace' },
        { label: 'Social', href: '/#community' },
        { label: 'Events', href: '/events' },
      ]

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 48)
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : 'is-transparent'}`}>
      <div className="site-header-inner mx-auto flex h-[72px] w-[min(1240px,calc(100%-32px))] items-center justify-between gap-3 sm:w-[min(1240px,calc(100%-40px))]">
        <Brand light={!isScrolled} href={homePage ? '#home' : '/'} />
        <nav className="site-desktop-nav hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              className={`site-nav-link text-sm font-medium transition ${item.label === 'Events' && activePage === 'events' ? 'is-active' : ''}`}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              key={item.label}
              aria-current={item.label === 'Events' && activePage === 'events' ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {authSession && <span className="site-user-greeting hidden text-sm font-semibold xl:inline">Hi, {authSession.user.username}</span>}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          {authSession ? (
            <button className="campus-button site-header-secondary hidden px-4 py-2.5 text-sm font-semibold sm:inline-flex" onClick={onLogout} type="button">Log out</button>
          ) : (
            <button className="campus-button campus-button-primary hidden items-center gap-2 px-4 py-2.5 text-sm font-semibold sm:inline-flex" onClick={onRegister} type="button">
              Join your campus <ArrowIcon diagonal />
            </button>
          )}
          <button
            aria-controls="mobile-site-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="site-menu-toggle lg:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="site-mobile-menu lg:hidden" id="mobile-site-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              className={`site-mobile-link ${item.label === 'Events' && activePage === 'events' ? 'is-active' : ''}`}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              key={item.label}
              aria-current={item.label === 'Events' && activePage === 'events' ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          {authSession
            ? <button className="site-mobile-link text-left" onClick={onLogout} type="button">Log out</button>
            : <button className="site-mobile-join campus-button campus-button-primary" onClick={onRegister} type="button">Join your campus</button>}
        </nav>
      )}
    </header>
  )
}

function ImageCarousel({ slides, label, className = '', imageClassName = '', interval = 5200, absolute = false, preloadImages = false, showControls = false, children }) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches || slides.length < 2) return undefined

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [interval, slides.length])

  return (
    <div className={`${absolute ? 'absolute inset-0' : 'relative'} isolate overflow-hidden ${className}`} aria-label={label}>
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          className={`carousel-photo absolute inset-0 size-full object-cover ${active === index ? 'opacity-100' : 'opacity-0'} ${imageClassName}`}
          src={slide.image}
          alt={active === index ? slide.alt : ''}
          aria-hidden={active !== index}
          fetchPriority={index === 0 ? 'high' : undefined}
          loading={preloadImages || index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      ))}
      {children?.(slides[active], active)}
      {showControls && slides.length > 1 && (
        <div className="carousel-controls" aria-label={`${label} slides`}>
          {slides.map((slide, index) => (
            <button
              aria-current={active === index ? 'true' : undefined}
              aria-label={`Show slide ${index + 1}: ${slide.title || slide.location || slide.label}`}
              className={`carousel-control ${active === index ? 'is-active' : ''}`}
              key={slide.image}
              onClick={() => setActive(index)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  )
}

function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] ${light ? 'text-white/65' : 'text-slate-500'}`}>
      <span className={`font-semibold ${light ? 'text-emerald-300' : 'text-emerald-700'}`}>{number}</span>
      <span>{children}</span>
    </div>
  )
}

function AuthPage({ mode, onChangeMode, onHome, onAuthenticated, theme, onToggleTheme }) {
  const [notice, setNotice] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const isRegister = mode === 'register'

  const handleSubmit = async (event) => {
    event.preventDefault()
    setNotice('')
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const requestBody = {
      email: formData.get('email'),
      password: formData.get('password'),
      ...(isRegister ? { username: formData.get('username') } : {}),
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'}/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      })
      const result = await response.json()

      if (!response.ok) {
        setNotice(result.message || 'We could not complete your request. Check your details and try again.')
        return
      }

      onAuthenticated(result)
      setSignedIn(true)
      setNotice(`You're signed in as ${result.user.username}.`)
    } catch {
      setNotice('Could not reach CampusLink. Check that the Java backend is running and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="auth-page min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="auth-page-toolbar mx-auto mb-4 flex w-full max-w-6xl items-center justify-between">
        <a className="auth-back-link" href="#home" onClick={onHome}>← Back to CampusLink</a>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div className="auth-card mx-auto grid min-h-[min(760px,calc(100vh-96px))] max-w-6xl overflow-hidden bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="auth-campus-image relative min-h-[240px] overflow-hidden sm:min-h-[320px] lg:min-h-full">
          <img
            src={photos.addis}
            alt="A tree-lined walkway at Addis Ababa University"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/10" />
          <div className="absolute inset-x-0 top-0 p-6 sm:p-9">
            <Brand light />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">Made for campus life</span>
            <h1 className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              {isRegister ? 'Your campus community starts here.' : 'Good to have you back.'}
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
              {isRegister
                ? 'Connect with students, find what you need, and make more of every campus day.'
                : 'Sign in with your student email and pick up where your campus community left off.'}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-14">
          <div className="w-full max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {isRegister ? 'Create your account' : 'Welcome back'}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {isRegister ? 'Join your campus.' : 'Log in.'}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {isRegister
                ? 'Use your university email to get started.'
                : 'Enter your university email and password to continue.'}
            </p>

            {signedIn ? (
              <div className="mt-8 space-y-5">
                <p className="auth-success" role="status">{notice}</p>
                <button className="campus-button campus-button-primary w-full py-3.5 text-sm font-semibold" onClick={onHome} type="button">
                  Continue to CampusLink
                </button>
              </div>
            ) : (
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              {isRegister && (
                <label className="auth-field">
                  <span>Username</span>
                  <input
                    autoComplete="username"
                    name="username"
                    placeholder="Choose a username"
                    required
                    type="text"
                  />
                </label>
              )}
              <label className="auth-field">
                <span>Institutional student email</span>
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@university.edu.et"
                  required
                  type="email"
                />
              </label>
              <label className="auth-field">
                <span>Password</span>
                <input
                  autoComplete={isRegister ? 'new-password' : 'current-password'}
                  minLength={8}
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  type="password"
                />
              </label>

              {notice && <p className="auth-notice" role="alert">{notice}</p>}

              <button className="campus-button campus-button-primary w-full py-3.5 text-sm font-semibold" disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Please wait…' : isRegister ? 'Create account' : 'Log in'}
              </button>
            </form>
            )}

            <p className="mt-7 text-center text-sm text-slate-600">
              {isRegister ? 'Already have an account?' : 'New to CampusLink?'}{' '}
              <button
                className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                onClick={() => onChangeMode(isRegister ? 'login' : 'register')}
                type="button"
              >
                {isRegister ? 'Log in' : 'Create an account'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

function EventsPage({ authSession, onRegister, onLogout, theme, onToggleTheme }) {
  const [activeFilter, setActiveFilter] = useState(eventFilters[0])
  const [expandedEvent, setExpandedEvent] = useState(null)
  const [interestedEvents, setInterestedEvents] = useState([])
  const visibleEvents = campusEvents.filter((event) => (
    activeFilter === eventFilters[0] || event.category === activeFilter
  ))

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader
        activePage="events"
        authSession={authSession}
        onRegister={onRegister}
        onLogout={onLogout}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      <section className="events-hero relative isolate flex min-h-[440px] items-end overflow-hidden bg-slate-950 sm:min-h-[520px]">
        <ImageCarousel
          slides={celebrationSlides}
          label="Students celebrating and enjoying campus events"
          interval={6500}
          absolute
          preloadImages
          showControls
        >
          {(slide, index) => (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/80" />
              <div className="hero-image-caption event-image-caption">
                <span>0{index + 1} / 0{celebrationSlides.length}</span>
                <strong>{slide.location}</strong>
                <p>{slide.alt}</p>
              </div>
            </>
          )}
        </ImageCarousel>
        <div className="pointer-events-none relative mx-auto w-[min(1120px,calc(100%-40px))] pb-14 pt-24 text-white sm:pb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">CampusLink events</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-7xl">
            Student life is<br />better <span className="text-blue-300">together.</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            Discover student celebrations, cultural gatherings, and club events to share with your campus community.
          </p>
          <a className="campus-button campus-button-primary pointer-events-auto mt-7 inline-flex min-h-11 items-center gap-2 px-5 text-sm font-semibold" href="#upcoming-events">
            Explore events <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-40px))] py-14 sm:py-20" id="upcoming-events">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-blue-700">Made for student life</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-black sm:text-5xl">Find your next moment.</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Explore event ideas for your campus community. Dates and locations will appear when campus organizers publish confirmed listings.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter events by type">
            {eventFilters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter}
                className={`campus-button px-4 py-2.5 text-xs font-semibold ${activeFilter === filter ? 'campus-button-primary' : 'campus-button-secondary'}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {visibleEvents.map((event) => {
            const isExpanded = expandedEvent === event.title
            return (
              <article className="event-card overflow-hidden border border-slate-200 bg-white" key={event.title}>
                <div className="event-card-image relative h-56 overflow-hidden bg-slate-100 sm:h-64">
                  <img className="size-full object-cover" src={event.image} alt={event.alt} loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-800">
                    {event.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                    <span>{event.campus}</span>
                    <span className="event-date-label">Date to be announced</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black">{event.title}</h3>
                  {isExpanded && (
                    <p className="mt-3 text-sm leading-6 text-slate-600">{event.description}</p>
                  )}
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <button
                      aria-expanded={isExpanded}
                      className="text-sm font-semibold text-blue-800 transition hover:text-blue-600"
                      onClick={() => setExpandedEvent(isExpanded ? null : event.title)}
                      type="button"
                    >
                      {isExpanded ? 'Close details' : 'Event details'}
                    </button>
                    <button
                      className="campus-button campus-button-secondary px-4 py-2 text-xs font-semibold"
                      onClick={() => {
                        if (!authSession) {
                          onRegister()
                          return
                        }
                        setInterestedEvents((current) => (
                          current.includes(event.title)
                            ? current.filter((title) => title !== event.title)
                            : [...current, event.title]
                        ))
                      }}
                      type="button"
                    >
                      {authSession
                        ? interestedEvents.includes(event.title) ? 'Saved to interests' : 'Save to interests'
                        : 'Join to participate'}
                    </button>
                  </div>
                  {authSession && isExpanded && (
                    <p className="mt-3 text-xs leading-5 text-slate-500" role="status">
                      {interestedEvents.includes(event.title)
                        ? `Saved for ${authSession.user.username}. Confirmed event dates will appear when organizers publish them.`
                        : `Signed in as ${authSession.user.username}. Confirmed event dates will appear when organizers publish them.`}
                    </p>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-black py-12 text-white sm:py-16">
        <div className="mx-auto flex w-[min(1120px,calc(100%-40px))] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Bring your campus together</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Your next campus story starts here.</h2>
          </div>
          {authSession
            ? <a className="campus-button campus-button-primary inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold" href="/">Back to campus home</a>
            : <button className="campus-button campus-button-primary inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold" onClick={onRegister} type="button">Join CampusLink</button>}
        </div>
      </section>
    </main>
  )
}

function App() {
  const [likedPost, setLikedPost] = useState(false)
  const [authSession, setAuthSession] = useState(null)
  const [theme, setTheme] = useState(() => (
    window.localStorage.getItem('campuslink-theme') === 'dark' ? 'dark' : 'light'
  ))
  const isEventsPage = window.location.pathname === '/events'
  const [authMode, setAuthMode] = useState(() => {
    if (window.location.hash === '#login') return 'login'
    if (window.location.hash === '#register') return 'register'
    return null
  })

  const navigateToAuth = (mode) => {
    setAuthMode(mode)
    window.history.pushState(null, '', `#${mode}`)
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('campuslink-theme', theme)
  }, [theme])

  useEffect(() => {
    const syncAuthMode = () => {
      if (window.location.hash === '#login') setAuthMode('login')
      else if (window.location.hash === '#register') setAuthMode('register')
      else setAuthMode(null)
    }

    window.addEventListener('hashchange', syncAuthMode)
    window.addEventListener('popstate', syncAuthMode)
    return () => {
      window.removeEventListener('hashchange', syncAuthMode)
      window.removeEventListener('popstate', syncAuthMode)
    }
  }, [])

  useEffect(() => {
    if (authMode) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [authMode])

  useEffect(() => {
    document.title = isEventsPage ? 'Campus Events | CampusLink' : 'CampusLink | Your campus, all in one place'
  }, [isEventsPage])

  useEffect(() => {
    if (authMode) return undefined
    const targets = document.querySelectorAll('.scroll-reveal, .scroll-reveal-item')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    let observer
    const reveal = (target) => {
      target.classList.add('is-visible')
      observer?.unobserve(target)
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target)
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
      )
      targets.forEach((target) => observer.observe(target))
    }

    let frame = 0
    const revealVisibleTargets = () => {
      frame = 0
      targets.forEach((target) => {
        if (target.classList.contains('is-visible')) return
        const bounds = target.getBoundingClientRect()
        if (bounds.top < window.innerHeight && bounds.bottom > 0) reveal(target)
      })
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(revealVisibleTargets)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    revealVisibleTargets()

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [authMode])

  if (authMode) {
    return (
      <AuthPage
        key={authMode}
        mode={authMode}
        onChangeMode={navigateToAuth}
        onAuthenticated={setAuthSession}
        theme={theme}
        onToggleTheme={toggleTheme}
        onHome={() => {
          window.history.pushState(null, '', isEventsPage ? '/events' : '#home')
          setAuthMode(null)
        }}
      />
    )
  }

  if (isEventsPage) {
    return (
      <EventsPage
        authSession={authSession}
        onRegister={() => navigateToAuth('register')}
        onLogout={() => setAuthSession(null)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    )
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader
        activePage="home"
        authSession={authSession}
        onRegister={() => navigateToAuth('register')}
        onLogout={() => setAuthSession(null)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <section className="relative min-h-[680px] overflow-hidden bg-slate-900 sm:min-h-[740px]" id="home">
        <ImageCarousel
          slides={heroSlides}
          label="Ethiopian university campuses"
          absolute
          preloadImages
          showControls
          imageClassName="object-center"
        >
          {(slide, index) => (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/60 to-slate-950/65" />
              <div className="absolute inset-x-0 top-0 mx-auto flex w-[min(1240px,calc(100%-40px))] justify-end pt-5">
                <span className="rounded-full border border-white/35 bg-slate-950/15 px-3 py-1.5 text-[9px] font-semibold tracking-[0.15em] text-white backdrop-blur">
                  MADE FOR ETHIOPIAN CAMPUSES
                </span>
              </div>
              <div className="hero-copy absolute inset-x-0 top-1/2 mx-auto flex w-[min(1240px,calc(100%-40px))] flex-col items-center px-2 pb-10 text-center text-white sm:pb-12">
                <span key={`${slide.title}-eyebrow`} className="hero-copy-item inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-blue-200">
                  <span className="h-px w-8 bg-blue-300" /> {slide.eyebrow}
                </span>
                <h1 key={`${slide.title}-headline`} className="hero-copy-item mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
                  {slide.headline}<br /><span className="text-blue-300">{slide.emphasis}</span>
                </h1>
                <p key={`${slide.title}-description`} className="hero-copy-item mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  {slide.description}
                </p>
                <div className="hero-copy-action mt-8 flex flex-wrap items-center justify-center gap-5">
                  <a className="campus-button campus-button-primary inline-flex min-h-12 items-center gap-3 px-6 text-sm font-semibold" href={slide.href}>
                    {slide.action} <ArrowIcon />
                  </a>
                  <a className="text-sm font-medium text-white/90 underline decoration-white/40 underline-offset-4 transition hover:text-blue-200" href="#how-it-works">See how it works</a>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-[76px] mx-auto flex w-[min(1240px,calc(100%-40px))] justify-end text-right text-white">
                <div className="hero-image-caption">
                  <span>0{index + 1} / 0{heroSlides.length}</span>
                  <span className="text-[9px] font-bold tracking-[0.17em] text-blue-200">{slide.location}</span>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">{slide.title}</h2>
                  <p className="mt-1 text-xs text-white/75">{slide.note}</p>
                </div>
              </div>
            </>
          )}
        </ImageCarousel>
        <div className="pointer-events-none absolute inset-x-0 bottom-[67px] z-10 h-px bg-white/25" />
      </section>

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex min-h-16 w-[min(1240px,calc(100%-40px))] flex-wrap items-center justify-center gap-x-7 gap-y-2 py-4 text-[10px] font-bold tracking-[0.14em] text-slate-500 sm:justify-between sm:text-xs">
          <span className="text-emerald-800">BUILT FOR EVERY CAMPUS</span>
          <span>ADDIS ABABA</span><span>BAHIR DAR</span><span>GONDAR</span><span>HAWASSA</span>
        </div>
      </div>

      <section className="scroll-reveal mx-auto w-[min(1120px,calc(100%-40px))] py-20 sm:py-28" id="how-it-works">
        <SectionLabel number="01">The campus way</SectionLabel>
        <div className="scroll-reveal-item mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-slate-900 sm:text-6xl">
            The campus platform that brings your whole day together.
          </h2>
          <div className="max-w-sm md:justify-self-end">
            <p className="text-sm leading-7 text-slate-600">
              CampusLink helps students find lost belongings, buy and sell useful things, share with their campus community, and discover events—all in one place.
            </p>
            <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-600" href="#lost-found">
              Explore campus features <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </section>

      <section className="scroll-reveal border-y border-slate-100 bg-slate-50 py-16 sm:py-20" id="lost-found">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <SectionLabel number="02">Lost &amp; Found</SectionLabel>
          <div className="scroll-reveal-item mt-8 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
            <ImageCarousel
              slides={lostSlides}
              label="Lost and found items"
              className="min-h-[350px] sm:min-h-[490px]"
              imageClassName="object-center"
            >
              {(slide) => (
                <>
                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-2 text-[9px] font-bold tracking-[0.12em] text-slate-700 shadow-sm sm:left-7 sm:top-7">
                    {slide.label}
                  </div>
                  <div className="absolute bottom-20 left-5 rounded-xl border border-white/30 bg-slate-950/40 px-4 py-3 text-white backdrop-blur-sm sm:bottom-24 sm:left-7">
                    <span className="block text-[9px] font-medium uppercase tracking-[0.14em] text-emerald-200">GOOD THINGS FIND THEIR WAY</span>
                    <strong className="mt-1 block text-sm font-semibold">{slide.note}</strong>
                  </div>
                </>
              )}
            </ImageCarousel>
            <div className="flex flex-col justify-center p-7 sm:p-11 lg:p-12">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Your campus has your back</span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-slate-900 sm:text-5xl">
                Lost something?<br /><span className="text-emerald-700">Let’s find it.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                Post a lost item, share a find, and help good things make their way back. Every post connects with people right where you study.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="campus-button campus-button-primary inline-flex min-h-11 items-center gap-2 px-5 text-sm font-semibold" href="#join">
                  Explore Lost &amp; Found <ArrowIcon />
                </a>
                <a className="campus-button campus-button-secondary inline-flex min-h-11 items-center px-5 text-sm font-semibold" href="#community">How it works</a>
              </div>
              <div className="mt-9 flex items-center gap-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
                <span className="grid size-8 place-items-center rounded-full bg-emerald-50 text-emerald-800">✓</span>
                Only your campus. Always community-led.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal mx-auto w-[min(1120px,calc(100%-40px))] py-20 sm:py-28" id="marketplace">
        <SectionLabel number="03">The campus marketplace</SectionLabel>
        <div className="scroll-reveal-item mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-slate-900 sm:text-6xl">
              Good finds.<br /><span className="text-blue-700">Fair prices.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Pass on what you’ve outgrown. Pick up what you need next. Student-to-student finds, all close to home.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Books, tech, and everyday campus essentials deserve a second life—at prices that work for students.
            </p>
            <a className="campus-button campus-button-primary mt-7 inline-flex min-h-11 items-center gap-2 px-5 text-sm font-semibold" href="#join">
              Explore the marketplace <ArrowIcon />
            </a>
            <span className="mt-5 text-[10px] font-semibold tracking-[0.12em] text-blue-800">BUY · SELL · SWAP · REPEAT</span>
          </div>
          <ImageCarousel
            slides={marketSlides}
            label="Campus marketplace listings"
            className="min-h-[380px] rounded-3xl bg-slate-100 sm:min-h-[520px]"
            imageClassName="object-center"
          >
            {(slide) => (
              <>
                <div className="absolute left-5 top-5 rounded-md bg-white px-3 py-2 text-[9px] font-bold tracking-[0.13em] text-slate-700 shadow-sm sm:left-7 sm:top-7">
                  {slide.label}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/85 to-transparent px-5 pb-8 pt-24 text-white sm:px-8 sm:pb-10">
                  <span className="text-xs font-semibold text-blue-200">CAMPUS FINDS, MADE CLOSE</span>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{slide.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{slide.detail}</p>
                </div>
              </>
            )}
          </ImageCarousel>
        </div>
      </section>

      <section className="scroll-reveal social-showcase relative isolate overflow-hidden text-white" id="community">
        <ImageCarousel
          slides={communitySlides}
          label="Campus community background photos"
          interval={4600}
          absolute
          className="z-0"
        >
          {() => <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/75 to-slate-950/60" />}
        </ImageCarousel>
        <div className="scroll-reveal-item relative z-10 mx-auto grid w-[min(1120px,calc(100%-40px))] gap-10 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="py-2">
            <SectionLabel number="04" light>Your campus, your people</SectionLabel>
            <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.17em] text-blue-200">A social space for student life</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-7xl">Campus is better<br />together.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
              Share what’s happening, celebrate your wins, discover campus conversations, and stay connected to the people around you.
            </p>
            <a className="campus-button campus-button-primary mt-7 inline-flex min-h-11 items-center gap-2 px-5 text-sm font-semibold" href="#join">
              Join the conversation <ArrowIcon />
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/60 bg-white p-5 text-slate-900 shadow-2xl sm:p-7">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <img src="/campuslink-logo.jpeg" alt="" className="size-10 object-contain" width="40" height="40" />
              <div className="flex flex-1 flex-col gap-1">
                <strong className="text-sm font-bold">CampusLink community</strong>
                <span className="text-xs text-slate-500">Your campus · student voices</span>
              </div>
              <span className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">Community</span>
            </div>
            <p className="py-5 text-sm leading-7 text-slate-700 sm:text-base">
              From a club announcement to a small campus win—share the moments and ideas that bring your student community closer.
            </p>
            <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
              <span className="font-semibold text-blue-700">✳ {likedPost ? '13' : '12'} students liked this</span>
              <span>3 replies</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className={`campus-button campus-button-secondary px-4 py-2 text-xs font-semibold ${likedPost ? 'is-selected' : ''}`} type="button" onClick={() => setLikedPost((liked) => !liked)} aria-pressed={likedPost}>
                {likedPost ? '♥ Liked' : '♡ Like'}
              </button>
              <a className="campus-button campus-button-secondary px-4 py-2 text-xs font-semibold no-underline" href="#join">Reply</a>
              <a className="campus-button campus-button-secondary px-4 py-2 text-xs font-semibold no-underline" href="#join">Share</a>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal border-y border-slate-100 bg-slate-50" id="events">
        <div className="scroll-reveal-item mx-auto grid w-[min(1120px,calc(100%-40px))] gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <ImageCarousel
            slides={celebrationSlides}
            label="Students celebrating and enjoying campus events"
            className="min-h-[330px] rounded-3xl sm:min-h-[470px]"
          >
            {(slide) => (
              <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-2 text-[9px] font-bold tracking-[0.13em] text-slate-700 shadow-sm sm:left-7 sm:top-7">
                {slide.location}
              </div>
            )}
          </ImageCarousel>
          <div className="py-2 lg:pl-8">
            <SectionLabel number="05">Student celebrations</SectionLabel>
            <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.045em] text-slate-900 sm:text-6xl">
              Celebrate<br />campus <span className="text-blue-700">together.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Bring campus traditions and student milestones to life. Discover GC Day, Half Life, club celebrations, cultural festivals, and the gatherings your classmates are looking forward to.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['GC Day', 'Half Life', 'Cultural festivals', 'Club celebrations'].map((event) => (
                <span className="rounded-md border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-blue-800" key={event}>
                  {event}
                </span>
              ))}
            </div>
            <a className="campus-button campus-button-primary mt-7 inline-flex min-h-11 items-center gap-2 px-5 text-sm font-semibold" href="/events">
              Find your next event <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white" id="join">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))] py-10 sm:py-12">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Brand light />
              <p className="mt-3 text-xs leading-5 text-slate-400">A home for everything<br />happening on campus.</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-300" aria-label="Footer navigation">
              <a className="transition hover:text-white" href="#lost-found">Lost &amp; Found</a>
              <a className="transition hover:text-white" href="#marketplace">Marketplace</a>
              <a className="transition hover:text-white" href="#community">Community</a>
              <a className="transition hover:text-white" href="/events">Events</a>
            </nav>
            <a className="text-xs font-semibold text-slate-300 no-underline transition hover:text-white" href="#home">Back to the top ↑</a>
          </div>
          <p className="pt-5 text-[9px] leading-5 text-slate-500">
            PHOTOGRAPHY:{' '}
            <a className="text-slate-400 underline underline-offset-2" href="https://commons.wikimedia.org/wiki/File:University_Campus_in_Addis_Ababa.jpg" target="_blank" rel="noreferrer">Ninaras · CC BY 4.0</a>
            {' · '}
            <a className="text-slate-400 underline underline-offset-2" href="https://commons.wikimedia.org/wiki/File:Stairs_of_the_Lion_of_Judea_in_Addis_Ababa.jpg" target="_blank" rel="noreferrer">Ninaras · CC BY 4.0</a>
            {' · '}
            <a className="text-slate-400 underline underline-offset-2" href="https://commons.wikimedia.org/wiki/File:View_through_Gates_of_University_-_Bahir_Dar_-_Ethiopia_(8681131852).jpg" target="_blank" rel="noreferrer">Adam Jones · CC BY-SA 2.0</a>
            {' · '}
            <a className="text-slate-400 underline underline-offset-2" href="https://commons.wikimedia.org/wiki/File:University_of_Gondar,_Ethiopia_Maraki_to_Tewodros_Campus.jpg" target="_blank" rel="noreferrer">Professor Mersha Chanie Kebede · CC0</a>
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
