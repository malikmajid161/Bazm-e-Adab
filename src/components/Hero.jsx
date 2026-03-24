import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#fdfbf7_0%,#ffffff_100%)]">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        d="M0 400C100 350 200 450 300 400C400 350 500 450 600 400C700 350 800 450 800 400"
                        stroke="#1E293B"
                        strokeWidth="0.5"
                    />
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
                        d="M0 450C150 400 250 500 400 450C550 400 650 500 800 450"
                        stroke="#BE123C"
                        strokeWidth="0.5"
                    />
                    <circle cx="10%" cy="20%" r="200" fill="url(#hero-grad-1)" fillOpacity="0.3" />
                    <circle cx="90%" cy="80%" r="300" fill="url(#hero-grad-2)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="hero-grad-1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#1E293B" stopOpacity="1" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="hero-grad-2" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#BE123C" stopOpacity="1" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                            duration: 1
                        }
                    }
                }}
                className="relative z-10 text-center px-6 max-w-6xl pt-24 md:pt-32"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className="text-brand uppercase tracking-[6px] font-bold text-xs md:text-sm mb-8 block"
                    >
                        COMSATS Official Literary Society
                    </motion.span>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-slate-900 leading-[1.1] mb-10 flex flex-col items-center gap-4 tracking-tight"
                    >
                        <span className="block">Bazm-e-Adab</span>
                        <span className="urdu text-[0.45em] font-normal text-brand whitespace-nowrap opacity-90">
                            (بزمِ ادب)
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-base sm:text-lg md:text-2xl text-slate-500 font-normal mb-14 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        A sanctuary where Urdu literature breathes through modern intellect.<br className="hidden md:block" />
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            href="/#join"
                            className="btn-primary w-full sm:w-auto no-underline text-center !py-6 !px-10 sm:!px-16 text-lg sm:text-xl shadow-2xl shadow-brand/20"
                        >
                            Start Your Journey
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </header>
    )
}

export default Hero
