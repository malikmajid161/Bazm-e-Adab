import React, { memo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import useCarousel from '../hooks/useCarousel'

const LiteratureShowcase = memo(({ items }) => {
    const { currentIndex, next, prev, goTo } = useCarousel(items.length, 4000)

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') next()
            if (e.key === 'ArrowLeft') prev()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [next, prev])

    return (
        <section id="showcase" className="py-28 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6"
                    >
                        Literature Showcase
                    </motion.h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Experience the timeless beauty of Urdu masterpieces curated by our experts.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="glass-card !p-16 md:!p-24 relative group hover:bg-gold/5 transition-colors duration-500 min-h-[400px] flex flex-col justify-center"
                        >
                            <Quote className="absolute top-12 right-12 text-gold/10 group-hover:text-gold/20 transition-colors" size={120} />

                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gold font-bold text-[12px] tracking-[4px] uppercase mb-8 block"
                            >
                                {items[currentIndex].type}
                            </motion.span>

                            <div className="urdu text-3xl md:text-5xl font-normal text-slate-800 leading-[1.8] mb-12">
                                {items[currentIndex].lines.map((line, lidx) => (
                                    <motion.p
                                        key={lidx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + lidx * 0.1 }}
                                    >
                                        {line}
                                    </motion.p>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-black/5 flex items-end justify-between">
                                <div>
                                    <h4 className="font-playfair font-bold text-2xl text-slate-700">— {items[currentIndex].author}</h4>
                                    <p className="text-slate-400 mt-2 font-light italic">{items[currentIndex].desc}</p>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={prev} className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-gold hover:text-white transition-all">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button onClick={next} className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-gold hover:text-white transition-all">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {items.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goTo(idx)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-12 bg-gold' : 'w-2 bg-slate-200'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
})

export default LiteratureShowcase
