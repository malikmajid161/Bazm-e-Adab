import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { societyData } from '../data/societyData'
import { Link } from 'react-router-dom'
import { Feather, PenTool, Mic, Users, Trophy, Layout, ArrowRight, CheckCircle2 } from 'lucide-react'

const iconMap = { Feather, PenTool, Mic, Users, Trophy, Layout }

const Clubs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="pt-20 bg-white">
            {/* Hero Section */}
            <section className="bg-slate-50 py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-bold text-slate-900 mb-6 md:mb-8 font-serif tracking-tighter"
                    >
                        Our Clubs
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        Join the specialized circles of Bazm-e-Adab where creativity meets tradition. 
                        Each club is a dedicated space for specific literary interests.
                    </motion.p>
                </div>
            </section>

            {/* Clubs Grid */}
            <section className="py-20 md:py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
                    {societyData.clubs.map((club, idx) => {
                        const Icon = iconMap[club.iconName]
                        return (
                            <motion.div
                                key={club.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}
                            >
                                {/* Content */}
                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                                            <Icon size={32} />
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">
                                            {club.title}
                                        </h2>
                                    </div>

                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                        {club.longDesc}
                                    </p>

                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Core Focus Areas</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {club.focusPoints.map((point, pIdx) => (
                                                <div key={pIdx} className="flex items-center gap-3 group">
                                                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                                                        <CheckCircle2 size={14} />
                                                    </div>
                                                    <span className="text-slate-700 font-medium">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Link 
                                        to={`/apply?club=${encodeURIComponent(club.title.split(' (')[0])}`}
                                        className="inline-flex items-center gap-2 text-brand font-bold hover:gap-4 transition-all duration-300"
                                    >
                                        Express Interest <ArrowRight size={20} />
                                    </Link>
                                    </div>
                                </div>

                                {/* Visual Element (Cinematic Image) */}
                                <div className="flex-1 w-full translate-z-0">
                                    <div className="aspect-[16/10] rounded-[48px] bg-slate-100 relative overflow-hidden group shadow-2xl shadow-slate-200/50">
                                        <img 
                                            src={club.image} 
                                            alt={club.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                                        <div className="absolute bottom-10 left-10 z-10">
                                            <div className="urdu text-5xl text-white/20 mb-2 pointer-events-none select-none">
                                                {club.title.includes('(') ? club.title.split('(')[1].replace(')', '') : 'بزم'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-28 px-6 bg-slate-900 text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">Find Your Circle</h2>
                    <p className="text-xl text-white/70 mb-12">
                        Whether you're a seasoned poet or a budding writer, there's a place for you in Bazm-e-Adab.
                    </p>
                    <Link to="/apply" className="btn-primary !bg-white !text-slate-900">
                        Check Application Status
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Clubs
