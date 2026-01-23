import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import PageLoader from './components/common/PageLoader'
import ErrorBoundary from './components/error/ErrorBoundary'

// Lazy loaded pages for code splitting
const Home = lazy(() => import('./pages/Home/Home'))
const AIAutomation = lazy(() => import('./pages/services/AIAutomation/AIAutomation'))
const CloudSecurity = lazy(() => import('./pages/services/CloudSecurity/CloudSecurity'))
const DevOps = lazy(() => import('./pages/services/DevOps/DevOps'))
const AIMLSolutions = lazy(() => import('./pages/services/AIMLSolutions/AIMLSolutions'))
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics/DataAnalytics'))
const CloudMigration = lazy(() => import('./pages/services/CloudMigration/CloudMigration'))
const VibeCoding = lazy(() => import('./pages/services/VibeCoding/VibeCoding'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Subsman = lazy(() => import('./pages/Subsman/Subsman'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Layout>
                    <AnimatePresence mode="wait">
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/services/ai-automation" element={<AIAutomation />} />
                                <Route path="/services/cloud-security" element={<CloudSecurity />} />
                                <Route path="/services/devops" element={<DevOps />} />
                                <Route path="/services/ai-ml-solutions" element={<AIMLSolutions />} />
                                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                                <Route path="/services/cloud-migration" element={<CloudMigration />} />
                                <Route path="/services/vibe-coding" element={<VibeCoding />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/products/subsman" element={<Subsman />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </AnimatePresence>
                </Layout>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App
