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

        </div>
    )
}

export default Events
