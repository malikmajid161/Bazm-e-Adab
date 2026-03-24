import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Target } from 'lucide-react'

const About = ({ data }) => (
    <section id="about" className="py-28 px-6 relative overflow-hidden bg-white">
        <div className="urdu absolute top-10 right-[-10%] md:right-10 text-[10rem] md:text-[18rem] opacity-[0.02] pointer-events-none select-none">ادب</div>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <span className="text-brand font-bold tracking-[5px] text-sm uppercase mb-6 block">The Heart of Our Society</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8">{data.title}</h2>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">{data.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-stretch">
                {/* Vision Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card !text-left !p-8 md:!p-10 flex flex-col justify-start relative overflow-hidden group transition-all duration-500 hover:bg-slate-50/50"
                >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 text-brand flex items-center justify-center mb-10 shadow-sm border border-black/5 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                        <CheckCircle size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-6 font-serif underline-offset-8 decoration-brand/20">ہمارا وژن</h3>
                    <p className="text-slate-500 leading-relaxed text-base">{data.mainText}</p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass-card !text-left !p-8 md:!p-10 flex flex-col justify-start group relative overflow-hidden transition-all duration-500 hover:bg-slate-50/50"
                >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 text-brand flex items-center justify-center mb-10 shadow-sm border border-black/5 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                        <Target size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-6 font-serif">{data.coreMission.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-base">{data.coreMission.desc}</p>
                </motion.div>

                {/* Objectives Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-card !text-left !p-8 md:!p-10 flex flex-col justify-start group transition-all duration-500 hover:bg-slate-50/50"
                >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 text-brand flex items-center justify-center mb-10 shadow-sm border border-black/5 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                        <motion.div animate={{ rotate: [0, 15, 0] }} transition={{ duration: 3, repeat: Infinity }}><CheckCircle size={24} /></motion.div>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-8 font-serif">اہم مقاصد</h3>
                    <div className="space-y-5">
                        {data.points.map((item, id) => (
                            <div key={id} className="flex items-start gap-4 group/item">
                                <div className="shrink-0 w-6 h-6 rounded-md bg-brand/10 flex items-center justify-center text-brand group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300">
                                    <CheckCircle size={14} />
                                </div>
                                <span className="text-slate-600 font-normal text-sm leading-snug pt-0.5">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)

export default About
