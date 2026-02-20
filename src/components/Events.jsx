import React from 'react'
import { motion } from 'framer-motion'

const Events = ({ data }) => (
    <section id="events" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">The Literary Calendar</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">Join our prestigious gatherings and leave your mark on the campus stage.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {data.map((ev, id) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        className="glass-card !text-left flex flex-col justify-between transition-shadow duration-500 hover:shadow-2xl hover:shadow-gold/5"
                    >
                        <div>
                            <span className="text-gold font-bold text-xs tracking-[3px] mb-4 block uppercase">{ev.sub}</span>
                            <h3 className="text-3xl font-playfair font-bold text-slate-800 mb-6">{ev.title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">{ev.desc}</p>
                            <div className="space-y-2 text-sm text-slate-400 mb-10 pt-6 border-t border-black/5">
                                <div className="flex gap-2">📅 <b>{ev.date}</b></div>
                                <div className="flex gap-2">📍 {ev.loc}</div>
                            </div>
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#join"
                            className="btn-primary w-full text-center no-underline border-none"
                        >
                            Register Seat
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default Events
