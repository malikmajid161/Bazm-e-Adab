import React from 'react'
import { motion } from 'framer-motion'

const Stats = ({ stats }) => (
    <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-4"
                    >
                        <div className="text-6xl md:text-8xl font-bold tracking-tighter" style={{ color: stat.color }}>
                            {stat.value}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] font-black text-slate-400">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default Stats
