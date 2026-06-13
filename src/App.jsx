import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import ScrollToTop from '@components/layout/ScrollToTop'

// Code splitting por rota (React.lazy + Suspense)
const Home = lazy(() => import('@pages/Home'))
const TrainingServices = lazy(() => import('@pages/TrainingServices'))
const PersonalTraining = lazy(() => import('@pages/PersonalTraining'))
const SemiPrivate = lazy(() => import('@pages/SemiPrivate'))
const RecoveryService = lazy(() => import('@pages/RecoveryService'))
const ActiveAging = lazy(() => import('@pages/ActiveAging'))
const InBody = lazy(() => import('@pages/InBody'))
const YouthTraining = lazy(() => import('@pages/YouthTraining'))
const Testimonials = lazy(() => import('@pages/Testimonials'))
const Referrals = lazy(() => import('@pages/Referrals'))
const Team = lazy(() => import('@pages/Team'))
const BioPage = lazy(() => import('@pages/BioPage'))
const JoinTeam = lazy(() => import('@pages/JoinTeam'))
const JobPost = lazy(() => import('@pages/JobPost'))
const Prices = lazy(() => import('@pages/Prices'))
const Blogs = lazy(() => import('@pages/Blogs'))
const BlogPost = lazy(() => import('@pages/BlogPost'))
const About = lazy(() => import('@pages/About'))
const FAQ = lazy(() => import('@pages/FAQ'))
const Terms = lazy(() => import('@pages/Terms'))
const Refund = lazy(() => import('@pages/Refund'))
const NotFound = lazy(() => import('@pages/NotFound'))

function App() {
  return (
    <>
      <ScrollToTop />
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
            <Route path="/team-members-page" element={<Team />} />
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
