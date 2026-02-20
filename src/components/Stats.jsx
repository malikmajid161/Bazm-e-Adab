import React from 'react'
import { motion } from 'framer-motion'

const Stats = ({ stats }) => (
    <section className="py-20 px-6 bg-[#fcfcfd]">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-2"
                    >
                        <div className="text-5xl md:text-7xl font-playfair font-bold" style={{ color: stat.color }}>
                            {stat.value}
                        </div>
                        <div className="text-sm uppercase tracking-[3px] font-bold text-slate-400">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default Stats
