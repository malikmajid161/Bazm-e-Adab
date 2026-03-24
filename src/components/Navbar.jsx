import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ onSearchClick }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Clubs', href: '/clubs' },
        { name: 'Events', href: '/events' },
        { name: 'Leadership', href: '/team' },
    ]

    return (
        <nav className={`fixed top-0 w-full z-[1000] px-6 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo Left */}
                <Link to="/" className="flex items-center gap-4 no-underline hover:opacity-80 transition-opacity min-w-[150px]">
                    
                    <span className="hidden sm:block font-semibold tracking-tighter text-slate-900 text-xl">BAZM-E-ADAB</span>
                </Link>

                {/* Links Right */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href} 
                            className={`text-[13px] font-medium uppercase tracking-[0.15em] hover:text-brand transition-colors no-underline relative group ${location.pathname === link.href ? 'text-brand' : 'text-slate-600'}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] bg-brand transition-all ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                    
                    <button
                        onClick={onSearchClick}
                        className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-brand transition-all duration-300"
                    >
                        <Search size={18} />
                    </button>
                    
                    <Link to="/apply" className="btn-primary !px-6 !py-2.5 !text-[11px]">Join Us</Link>
                </div>

                {/* Mobile Toggle & Search */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={onSearchClick}
                        className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-all duration-300"
                    >
                        <Search size={20} />
                    </button>
                    <button className="p-2 text-slate-800 outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -10 }} 
                        className="absolute top-full left-0 w-full bg-white shadow-xl p-8 flex flex-col gap-6 md:hidden border-t border-slate-50"
                    >
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className={`text-[13px] font-medium uppercase tracking-widest transition-colors no-underline ${location.pathname === link.href ? 'text-brand' : 'text-slate-800 hover:text-brand'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link 
                                to="/apply" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 btn-primary w-full !py-4 text-center"
                            >
                                Join Us
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        )
    }

    export default Navbar
