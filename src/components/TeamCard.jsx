import React, { memo } from 'react'
import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

const TeamCard = memo(({ initials, role, name, color, delay, isLoading = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="text-center group"
    >
        <div className="relative w-56 h-56 mx-auto mb-10">
            {isLoading ? (
                <Skeleton className="w-full h-full rounded-[50px] -rotate-3" />
            ) : (
                <motion.div
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    className={`w-full h-full rounded-[50px] bg-slate-50 border border-black/5 flex items-center justify-center text-5xl font-bold -rotate-3 transition-all duration-500 shadow-xl shadow-black/5 group-hover:shadow-gold/20 group-hover:border-gold`}
                    style={{ color }}
                >
                    {initials}
                </motion.div>
            )}
        </div>
        {isLoading ? (
            <div className="space-y-4 flex flex-col items-center">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-32" />
            </div>
        ) : (
            <div className="group-hover:scale-110 transition-transform duration-500">
                <span className="text-sm uppercase tracking-[4px] font-bold mb-3 block" style={{ color }}>{role}</span>
                <h3 className="font-playfair text-3xl font-bold text-slate-800">{name}</h3>
            </div>
        )}
    </motion.div>
))

export default TeamCard
