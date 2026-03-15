import { motion } from 'framer-motion'
import { memo } from 'react'
import Skeleton from './Skeleton'

const TeamCard = memo(({ name, role, image, color, delay, isLoading = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, ease: 'easeOut' }}
        className="group relative"
    >
        {isLoading ? (
            <div className="rounded-3xl overflow-hidden shadow-xl">
                <Skeleton className="w-full h-80" />
                <div className="p-5 space-y-3">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-5 w-32" />
                </div>
            </div>
        ) : (
            <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white border border-slate-100 h-full flex flex-col"
            >
                {/* Image */}
                <div className="relative h-72 overflow-hidden shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Role badge — bottom left of image */}
                    <div
                        className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-white text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm shadow"
                        style={{ backgroundColor: `${color}CC` }}
                    >
                        {role}
                    </div>
                </div>

                {/* Info */}
                <div className="px-5 py-4 flex items-center justify-between flex-grow">
                    <h3 className="font-playfair text-lg font-bold text-slate-800 leading-tight">
                        {name}
                    </h3>
                    {/* Colored dot accent */}
                    <div
                        className="w-3 h-3 rounded-full flex-shrink-0 ml-3 ring-2 ring-white shadow"
                        style={{ backgroundColor: color }}
                    />
                </div>
            </motion.div>
        )}
    </motion.div>
))

export default TeamCard
