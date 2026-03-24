import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Toast from './Toast'

const Events = ({ data }) => {
    const [toast, setToast] = useState(null)

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setToast({ message: 'Application not open yet', type: 'error' });
        setTimeout(() => setToast(null), 3000);
    }

    return (
        <section id="events" className="py-20 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-6">The Literary Calendar</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {data.map((ev, id) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="glass-card !text-left flex flex-col justify-between transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand/10 h-full"
                        >
                            <div className="flex-grow">
                                <span className="text-brand font-bold text-xs tracking-[3px] mb-4 block uppercase">{ev.sub}</span>
                                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">{ev.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed">{ev.desc}</p>
                                <div className="space-y-2 text-sm text-slate-400 mb-10 pt-6 border-t border-black/5">
                                    <div className="flex gap-2">📅 <b>{ev.date}</b></div>
                                    <div className="flex gap-2">📍 {ev.loc}</div>
                                </div>
                            </div>
                            <button
                                onClick={handleRegisterClick}
                                className="btn-primary w-full text-center no-underline border-none mt-auto"
                            >
                                Register Seat
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {toast && <Toast {...toast} onClose={() => setToast(null)} />}
            </AnimatePresence>
        </section>
    )
}

export default Events
