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
                        stroke="#c5a059"
                        strokeWidth="0.5"
                    />
                    <circle cx="10%" cy="20%" r="200" fill="url(#hero-grad)" fillOpacity="0.5" />
                    <circle cx="90%" cy="80%" r="300" fill="url(#hero-grad)" fillOpacity="0.5" />
                    <defs>
                        <radialGradient id="hero-grad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#c5a059" stopOpacity="1" />
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
                        className="text-gold uppercase tracking-[6px] font-bold text-xs md:text-sm mb-8 block"
                    >
                        COMSATS Official Literary Society
                    </motion.span>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-playfair font-bold text-slate-800 leading-[0.9] mb-12 flex flex-col items-center gap-6"
                    >
                        <span className="block">Bazm-e-Adab</span>
                        <span className="urdu text-[0.45em] font-normal text-gold whitespace-nowrap opacity-90">
                            (بزمِ ادب)
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-xl sm:text-2xl md:text-3xl text-slate-600 font-light mb-16 max-w-4xl mx-auto leading-relaxed"
                    >
                        A sanctuary where Urdu literature breathes through modern intellect.<br className="hidden md:block" />
                        <span className="text-gold font-medium mt-4 block">Poetry • Prose • Events • Mentorship</span>
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            href="#join"
                            className="btn-primary no-underline text-center !py-6 !px-16 text-xl shadow-2xl shadow-gold/20"
                        >
                            Start Your Journey
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            href="#join"
                            className="btn-outline no-underline shadow-none hover:shadow-gold/10 text-center !py-6 !px-16 text-xl"
                        >
                            Join Our Gatherings
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </header>
    )
}

export default Hero
