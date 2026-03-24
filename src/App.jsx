import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// --- Pages ---
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Apply from './pages/Apply'
import Clubs from './pages/Clubs'

// --- Modular Components ---
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import SearchOverlay from './components/SearchOverlay'

// --- Data ---
import { societyData } from './data/societyData'

const App = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

    const [toast, setToast] = useState(null)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    // Lenis Smooth Scroll Initialization
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    const toggleSearch = useCallback(() => setIsSearchOpen(prev => !prev), [])

    return (
        <Router>
            <div className="relative selection:bg-brand selection:text-white bg-white overflow-x-hidden">
                {/* Background Decorations */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
                    <motion.div
                        animate={{
                            x: [0, 150, 0],
                            y: [0, 100, 0],
                            scale: [1, 1.4, 1],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-brand/10 rounded-full blur-[150px]"
                    />
                    <motion.div
                        animate={{
                            x: [0, -120, 0],
                            y: [0, 150, 0],
                            scale: [1, 1.3, 1],
                            rotate: [0, -60, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] bg-brand/10 rounded-full blur-[200px]"
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

                <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand z-[2000] origin-left" style={{ scaleX }} />

                <Navbar onSearchClick={toggleSearch} />

                <main className="relative z-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/apply" element={<Apply />} />
                        <Route path="/clubs" element={<Clubs />} />
                    </Routes>
                </main>

                <Footer socialLinks={societyData.socialLinks} />
            </div>
        </Router>
    )
}

export default App
