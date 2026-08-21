import { Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import ScrollToTop from '@components/layout/ScrollToTop'
import RouteErrorBoundary from '@components/ui/RouteErrorBoundary'
import lazyWithRetry from '@utils/lazyWithRetry'

// Code splitting por rota (lazyWithRetry = React.lazy + retry/auto-reload)
const Home = lazyWithRetry(() => import('@pages/Home'))
const TrainingServices = lazyWithRetry(() => import('@pages/TrainingServices'))
const PersonalTraining = lazyWithRetry(() => import('@pages/PersonalTraining'))
const SemiPrivate = lazyWithRetry(() => import('@pages/SemiPrivate'))
const RecoveryService = lazyWithRetry(() => import('@pages/RecoveryService'))
const ActiveAging = lazyWithRetry(() => import('@pages/ActiveAging'))
const InBody = lazyWithRetry(() => import('@pages/InBody'))
const YouthTraining = lazyWithRetry(() => import('@pages/YouthTraining'))
const Testimonials = lazyWithRetry(() => import('@pages/Testimonials'))
const Referrals = lazyWithRetry(() => import('@pages/Referrals'))
const Team = lazyWithRetry(() => import('@pages/Team'))
const BioPage = lazyWithRetry(() => import('@pages/BioPage'))
const JoinTeam = lazyWithRetry(() => import('@pages/JoinTeam'))
const JobPost = lazyWithRetry(() => import('@pages/JobPost'))
const Prices = lazyWithRetry(() => import('@pages/Prices'))
const Blogs = lazyWithRetry(() => import('@pages/Blogs'))
const BlogPost = lazyWithRetry(() => import('@pages/BlogPost'))
const About = lazyWithRetry(() => import('@pages/About'))
const FAQ = lazyWithRetry(() => import('@pages/FAQ'))
const Terms = lazyWithRetry(() => import('@pages/Terms'))
const Refund = lazyWithRetry(() => import('@pages/Refund'))
const NotFound = lazyWithRetry(() => import('@pages/NotFound'))

// Páginas de gatilho de automação e CRM
const AppointmentStatusPage = lazyWithRetry(() => import('@pages/AppointmentStatusPage'))
const LostReasonPage = lazyWithRetry(() => import('@pages/LostReasonPage'))
const ObjectionLandingPage = lazyWithRetry(() => import('@pages/ObjectionLandingPage'))

function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <RouteErrorBoundary routeKey={location.pathname}>
        <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
          <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/training-services" element={<TrainingServices />} />
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/semi-private-personal-training" element={<SemiPrivate />} />
            <Route path="/recovery-service" element={<RecoveryService />} />
            <Route path="/active-aging" element={<ActiveAging />} />
            <Route path="/inbody" element={<InBody />} />
            <Route path="/youth-training-program" element={<YouthTraining />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/team" element={<Team />} />
            {/* Redirect da URL antiga para não quebrar links/SEO */}
            <Route path="/team-members-page" element={<Navigate to="/team" replace />} />
            <Route path="/bio/:slug" element={<BioPage />} />
            <Route path="/join-our-team" element={<JoinTeam />} />
            <Route path="/join-our-team/:slug" element={<JobPost />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms-of-service" element={<Terms />} />
            <Route path="/refund-policy" element={<Refund />} />

            {/* Trigger links de Automação & CRM */}
            <Route path="/appt-showed" element={<AppointmentStatusPage type="showed" />} />
            <Route path="/appt-no-show" element={<AppointmentStatusPage type="no-show" />} />

            <Route path="/lost-no-response" element={<LostReasonPage reason="no-response" />} />
            <Route path="/lost-fit" element={<LostReasonPage reason="fit" />} />
            <Route path="/lost-timing" element={<LostReasonPage reason="timing" />} />
            <Route path="/lost-timig" element={<LostReasonPage reason="timing" />} />
            <Route path="/lost-price" element={<LostReasonPage reason="price" />} />
            <Route path="/lost-went-elsewhere" element={<LostReasonPage reason="went-elsewhere" />} />

            <Route path="/objection-doubt" element={<ObjectionLandingPage type="doubt" />} />
            <Route path="/objection-price" element={<ObjectionLandingPage type="price" />} />
            <Route path="/objection-timing" element={<ObjectionLandingPage type="timing" />} />

            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </>
  )
}

export default App
