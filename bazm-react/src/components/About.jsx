import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Target } from 'lucide-react'

const About = ({ data }) => (
    <section id="about" className="py-28 px-6 relative overflow-hidden bg-white">
        <div className="urdu absolute top-10 right-10 text-[18rem] opacity-[0.02] pointer-events-none select-none">ادب</div>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <span className="text-gold font-bold tracking-[5px] text-sm uppercase mb-6 block">The Heart of Our Society</span>
                <h2 className="text-5xl md:text-7xl font-playfair font-bold text-slate-800 mb-8">{data.title}</h2>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">{data.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-stretch">
                {/* Vision Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card !text-left !p-12 flex flex-col justify-start border-none shadow-2xl bg-[#fafafb] rounded-[50px] relative overflow-hidden group hover:bg-white transition-colors duration-500"
                >
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 text-gold flex items-center justify-center mb-8 shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-500">
                        <CheckCircle size={24} />
                    </div>
                    <h3 className="text-3xl font-playfair font-bold text-slate-800 mb-6">Our Vision</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{data.mainText}</p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass-card !text-left !p-12 border-gold/30 bg-gold/[0.03] flex flex-col justify-start group shadow-2xl relative overflow-hidden rounded-[50px] border-2"
                >
                    <div className="w-14 h-14 rounded-2xl bg-gold text-white flex items-center justify-center mb-8 shadow-xl shadow-gold/20">
                        <Target size={24} />
                    </div>
                    <h3 className="text-3xl font-playfair font-bold text-slate-800 mb-6">{data.coreMission.title}</h3>
                    <p className="text-slate-700 leading-relaxed text-lg font-medium italic">{data.coreMission.desc}</p>
                    <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Target size={160} />
                    </div>
                </motion.div>

                {/* Objectives Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-card !text-left !p-12 flex flex-col justify-start border-none shadow-2xl bg-slate-50/80 rounded-[50px]"
                >
                    <h3 className="text-3xl font-playfair font-bold text-gold mb-8">Key Objectives</h3>
                    <div className="space-y-6">
                        {data.points.map((item, id) => (
                            <div key={id} className="flex items-start gap-4 group/item">
                                <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-black/5 flex items-center justify-center text-gold group-hover/item:bg-gold group-hover/item:text-white transition-all duration-300 shadow-sm">
                                    <CheckCircle size={16} />
                                </div>
                                <span className="text-slate-700 font-medium text-base leading-snug pt-1">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)

export default About
