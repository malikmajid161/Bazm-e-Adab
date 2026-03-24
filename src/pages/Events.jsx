import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import EventsSection from '../components/Events'
import { societyData } from '../data/societyData'

const Events = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="pt-20">
            <div className="bg-slate-50 py-28 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 font-serif"
                    >
                        Our Events
                    </motion.h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Join us in our journey of celebrating Urdu literature through competitions, mushairas, and workshops.
                    </p>
                </div>
            </div>

            <EventsSection data={societyData.events} />

            <section className="py-28 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl font-bold text-slate-800 mb-4">Past Highlights</h2>
                         <p className="text-slate-500">A look back at our recent successful gatherings.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder for past events gallery */}
                        {[1, 2, 3].map(i => (
                            <div key={i} className="aspect-video bg-slate-100 rounded-[24px] border border-slate-200 overflow-hidden flex items-center justify-center text-slate-400 font-medium">
                                Memories from Event #{i}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Events
