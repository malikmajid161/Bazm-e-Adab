import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'

const JoinUs = () => (
    <section id="join" className="py-20 px-6 bg-white overflow-hidden">
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-slate-900 rounded-[40px] p-10 md:p-20 shadow-xl relative overflow-hidden text-center"
        >
            <div className="urdu absolute -bottom-10 -left-10 text-[12rem] opacity-[0.03] pointer-events-none select-none text-white">بزم</div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                    <Lock size={32} />
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Membership Recruitment</h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                    Our community is currently at full capacity for the semester. 
                    Applications for new members will reopen in the next academic cycle.
                </p>
                
                <Link 
                    to="/apply" 
                    className="inline-block px-10 py-5 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all duration-300 uppercase tracking-widest text-sm"
                >
                    Check Application Status
                </Link>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-brand/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl" />
        </motion.div>
    </section>
)

export default JoinUs
