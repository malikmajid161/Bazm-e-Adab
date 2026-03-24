import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = memo(({ icon: Icon, title, desc, delay }) => (
    <Link to="/clubs" className="block h-full no-underline">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, backgroundColor: "rgba(15, 23, 42, 0.03)" }}
            viewport={{ once: true }}
            transition={{
                delay,
                duration: 0.5,
                y: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="glass-card text-left group cursor-pointer border-transparent hover:border-brand/10 !p-10 h-full flex flex-col"
        >
            <div className="text-brand mb-6 flex justify-start group-hover:scale-110 transition-transform duration-500">
                <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-brand transition-colors duration-300">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-grow">{desc}</p>
        </motion.div>
    </Link>
))

export default ServiceCard
