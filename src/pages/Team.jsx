import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import TeamCard from '../components/TeamCard'
import { societyData } from '../data/societyData'
import { Link } from 'react-router-dom'

const Team = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Core Team Section */}
                <div className="mb-20 md:mb-32">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 md:mb-16 pb-4 border-b border-slate-100 flex items-center gap-4 group"
                    >
                        <span className="w-2 h-8 bg-google-red rounded-full" />
                        Core Team
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 px-4">
                        {societyData.team.filter(m => m.section === 'core').map((member, idx) => (
                            <TeamCard key={idx} {...member} />
                        ))}
                    </div>
                </div>

                {/* Heads & Leads Section */}
                <div>
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 md:mb-16 pb-4 border-b border-slate-100 flex items-center gap-4"
                    >
                        <span className="w-2 h-8 bg-google-green rounded-full" />
                        Heads & Leads
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 px-4">
                        {societyData.team.filter(m => m.section === 'lead').map((member, idx) => (
                                <TeamCard
                                    key={member.name}
                                    {...member}
                                    isFemale={member.isFemale}
                                />
                        ))}
                    </div>
                </div>
                
                <div className="mt-20 md:mt-32 text-center p-8 md:p-12 rounded-[40px] bg-slate-50 border border-slate-100">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Want to join the core team?</h3>
                    <p className="text-sm md:text-base text-slate-500 mb-8 max-w-xl mx-auto">We're always looking for passionate individuals to help us grow the literary community.</p>
                    <Link to="/apply" className="btn-primary">Apply Now</Link>
                </div>
            </div>
        </section>
    )
}

export default Team
