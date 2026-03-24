import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Info, Calendar, Clock, Send, CheckCircle2, User, Mail, GraduationCap, Laptop } from 'lucide-react'

const Apply = () => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const initialClub = queryParams.get('club') || ''

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        dept: '',
        interest: initialClub || 'General Membership'
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-white pt-40 pb-20 px-6 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
                        >
                            {/* Left Side: Information */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-widest mb-8">
                                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                                    Recruitment Status: Closed
                                </div>
                                
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6 md:mb-8 font-serif leading-[1.1]">
                                    Register Your <span className="text-brand">Interest</span>
                                </h1>
                                
                                <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                                    Official recruitment for the current semester is closed, but you can still join our waiting list. We'll notify you as soon as 
                                    {initialClub ? ` the ${initialClub} circle ` : ' our membership '} reopens.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 border border-slate-100">
                                            <Calendar size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">Next Membership Drive</h4>
                                            <p className="text-slate-500">Scheduled for Fall 2026. All registered students will receive an early-bird invite.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 border border-slate-100">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">Instant Updates</h4>
                                            <p className="text-slate-500">Follow our Instagram @bazmeadab_cuilhr for spot-recruitment alerts and sudden openings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                                    <Info size={120} />
                                </div>
                                
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input 
                                                required
                                                type="text" 
                                                placeholder="Enter your name"
                                                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-brand/5 outline-none transition-all font-medium"
                                                value={formState.name}
                                                onChange={e => setFormState({...formState, name: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">University Email</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input 
                                                required
                                                type="email" 
                                                placeholder="sp23-bcs-xxx@cuilahore.edu.pk"
                                                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-brand/5 outline-none transition-all font-medium"
                                                value={formState.email}
                                                onChange={e => setFormState({...formState, email: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Department</label>
                                            <div className="relative">
                                                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                <input 
                                                    required
                                                    type="text" 
                                                    placeholder="CS, EE, BA..."
                                                    className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-brand/5 outline-none transition-all font-medium"
                                                    value={formState.dept}
                                                    onChange={e => setFormState({...formState, dept: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Area of Interest</label>
                                            <div className="relative">
                                                <Laptop className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                <select 
                                                    className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-8 focus:ring-4 focus:ring-brand/5 outline-none transition-all font-medium appearance-none"
                                                    value={formState.interest}
                                                    onChange={e => setFormState({...formState, interest: e.target.value})}
                                                >
                                                    <option>General Membership</option>
                                                    <option>Prose Club</option>
                                                    <option>Poetry Club</option>
                                                    <option>Public Speaking</option>
                                                    <option>Mentorship</option>
                                                    <option>Competitions</option>
                                                    <option>Artistic Design</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-brand hover:bg-slate-800 text-white font-bold uppercase tracking-widest text-sm rounded-2xl py-5 border-none transition-all flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer shadow-sm hover:-translate-y-0.5"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>Register Interest <Send size={18} /></>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-xl mx-auto text-center"
                        >
                            <div className="w-24 h-24 bg-brand/10 text-brand rounded-[32px] flex items-center justify-center mx-auto mb-10">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Interest Registered!</h2>
                            <p className="text-xl text-slate-500 mb-12 leading-relaxed px-4">
                                Thank you, <span className="text-slate-900 font-bold">{formState.name.split(' ')[0]}</span>. Your interest in <span className="text-brand font-bold">{formState.interest}</span> has been logged. 
                                We'll keep you updated via your university email.
                            </p>
                            <Link to="/" className="btn-primary !rounded-full !px-12">
                                Back to Home
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Apply
