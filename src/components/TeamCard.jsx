import { motion } from 'framer-motion'
import { memo } from 'react'

const TeamCard = memo(({ name, role, image, color, delay, isFemale }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, ease: 'easeOut' }}
        className="relative pt-16 group" // pt-16 for overlapping image
    >
        {/* Card Body */}
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{ backgroundColor: `${color}10` }} // 10% opacity tint
            className="rounded-[32px] p-8 pt-20 text-center flex flex-col items-center h-full border border-transparent group-hover:border-slate-100 transition-all duration-500"
        >
            <h3 className="text-xl font-semibold text-slate-900 mb-3 font-serif">
                {name}
            </h3>
            
            {/* Role Badge */}
            <div 
                className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                style={{ 
                    backgroundColor: `${color}15`, 
                    color: color 
                }}
            >
                {role}
            </div>
        </motion.div>

        {/* Overlapping Image Circle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32">
            <div 
                className="w-full h-full rounded-full border-[5px] bg-white overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-110"
                style={{ borderColor: `${color}40` }} // 40% opacity border
            >
                <img
                    src={
                        image && !image.includes('dummy') && !image.includes('placeholder')
                            ? (image.startsWith('http') ? image : `/images/${image}`)
                            : (isFemale 
                                ? '/images/female_avatar.png' 
                                : 'https://avatar.iran.liara.run/public/boy')
                    }
                    alt={name}
                    className="w-full h-full object-cover object-top"
                />
            </div>
            
            {/* Inner Ring */}
            <div 
                className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"
            />
        </div>
    </motion.div>
))

export default TeamCard
