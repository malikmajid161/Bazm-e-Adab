import React, { memo } from 'react'
import { motion } from 'framer-motion'

const ServiceCard = memo(({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, backgroundColor: "rgba(197, 160, 89, 0.03)" }}
        viewport={{ once: true }}
        transition={{
            delay,
            duration: 0.5,
            y: { type: "spring", stiffness: 300, damping: 20 }
        }}
        className="glass-card text-center group cursor-pointer border-transparent hover:border-gold/20"
    >
        <div className="text-gold mb-6 flex justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <Icon size={48} strokeWidth={1.2} />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4 group-hover:text-gold transition-colors duration-300">{title}</h3>
        <p className="text-slate-500 leading-relaxed mb-6">{desc}</p>
        <div className="w-10 h-[2px] bg-gold/20 mx-auto group-hover:w-24 transition-all duration-500" />
    </motion.div>
))

export default ServiceCard
