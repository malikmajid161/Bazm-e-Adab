import React, { useState, useEffect, useCallback, memo } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

// --- Modular Components ---
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ServiceCard from './components/ServiceCard'
import Events from './components/Events'
import TeamCard from './components/TeamCard'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'
import Toast from './components/Toast'
import Stats from './components/Stats'
import LiteratureShowcase from './components/LiteratureShowcase'
import Library from './components/Library'
import SearchOverlay from './components/SearchOverlay'

// --- Hooks ---
import useCarousel from './hooks/useCarousel'

// --- Data ---
import { societyData } from './data/societyData'

// --- Lucide Icons (Mapping for Offerings) ---
import { Feather, PenTool, Mic, Users, Trophy, Layout, ChevronUp } from 'lucide-react'
const iconMap = { Feather, PenTool, Mic, Users, Trophy, Layout }

// --- Constants ---
const SB_URL = "https://xhmbavxhytmrrwtawrpf.supabase.co"
const SB_KEY = "sb_publishable_UGN8Kaij-p_5ddtdQzSN5w_NkR3oaQ7"

const App = () => {
    const { scrollYProgress, scrollY } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

    const [toast, setToast] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isTeamLoading, setIsTeamLoading] = useState(true)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [showBackToTop, setShowBackToTop] = useState(false)

    // Auto-cycling offerings
    const { currentIndex: activeOfferingIdx } = useCarousel(societyData.offerings.length, 4000)

    useEffect(() => {
        const timer = setTimeout(() => setIsTeamLoading(false), 2000)
        const unsubScroll = scrollY.on("change", (latest) => {
            setShowBackToTop(latest > 500)
        })
        return () => {
            clearTimeout(timer)
            unsubScroll()
        }
    }, [scrollY])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const showMessage = useCallback((message, type = 'success') => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 5000)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData.entries())
        payload.created_at = new Date().toISOString()

        try {
            if (SB_URL.includes("YOUR_PROJECT_ID")) {
                console.log("Demo Sub:", payload)
                await new Promise(r => setTimeout(r, 1500))
                showMessage("Application Sent! Our cabinet will contact you shortly.")
                e.target.reset()
            } else {
                const res = await fetch(`${SB_URL}/rest/v1/registrations`, {
                    method: 'POST',
                    headers: {
                        'apikey': SB_KEY,
                        'Authorization': `Bearer ${SB_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify(payload)
                })
                if (res.ok) {
                    showMessage("Welcome to Bazm-e-Adab! Submission successful.")
                    e.target.reset()
                } else {
                    showMessage("Server refused submission. Check Supabase config.", "error")
                }
            }
        } catch (err) {
            showMessage("Connection failed. Check your network.", "error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const toggleSearch = useCallback(() => setIsSearchOpen(prev => !prev), [])

    return (
        <div className="relative selection:bg-gold selection:text-white bg-white overflow-x-hidden">
            {/* Background Decorations - Optimized with will-change */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{
                        x: [0, 150, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.4, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: 'transform, opacity' }}
                    className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 150, 0],
                        scale: [1, 1.3, 1],
                        rotate: [0, -60, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: 'transform, opacity' }}
                    className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[200px]"
                />
            </div>

            <AnimatePresence>
                {toast && <Toast {...toast} onClose={() => setToast(null)} />}
            </AnimatePresence>

            <SearchOverlay
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                data={societyData}
            />

            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold z-[2000] origin-left" style={{ scaleX }} />

            <Navbar onSearchClick={toggleSearch} />

            <main className="relative z-10">
                <Hero />
                <About data={societyData.vision} />
                <Stats stats={societyData.stats} />

                <LiteratureShowcase items={societyData.literature} />

                <Library books={societyData.library} />

                {/* Offerings Carousel */}
                <section id="services" className="py-28 px-6 bg-transparent">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6"
                            >
                                Our Offerings
                            </motion.h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Structured programs designed to nurture the literary artist within you.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <AnimatePresence mode="popLayout">
                                {societyData.offerings.slice(activeOfferingIdx, activeOfferingIdx + 3).concat(
                                    societyData.offerings.slice(0, Math.max(0, (activeOfferingIdx + 3) - societyData.offerings.length))
                                ).map((item, idx) => (
                                    <ServiceCard
                                        key={item.title}
                                        {...item}
                                        icon={iconMap[item.iconName]}
                                        delay={idx * 0.1}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                <Events data={societyData.events} />

                {/* Leadership */}
                <section id="team" className="py-28 px-6 bg-transparent">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">The Core Cabinet</h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto">The architects driving the literary revolution at COMSATS.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-20 gap-x-16 max-w-6xl mx-auto px-4">
                            {societyData.team.map((member, idx) => (
                                <TeamCard key={idx} {...member} isLoading={isTeamLoading} />
                            ))}
                        </div>
                    </div>
                </section>

                <JoinUs onSubmit={handleSubmit} isSubmitting={isSubmitting} />
            </main>

            <button
                onClick={scrollToTop}
                className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                aria-label="Back to Top"
            >
                <ChevronUp size={24} />
            </button>

            <Footer socialLinks={societyData.socialLinks} />
        </div>
    )
}

export default App
