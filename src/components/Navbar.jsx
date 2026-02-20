import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'

const Navbar = ({ onSearchClick }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Our Vision', href: '#about' },
        { name: 'Library', href: '#library' },
        { name: 'Offerings', href: '#services' },
        { name: 'Gatherings', href: '#events' },
        { name: 'Leadership', href: '#team' },
    ]

    return (
        <nav className={`fixed top-0 w-full z-[1000] px-6 py-4 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-md py-2' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <a href="#home" className="flex items-center gap-4 no-underline group border-none">
                        <span className="urdu text-3xl text-gold group-hover:scale-110 transition-all duration-300 pt-1.5 flex items-center justify-center">بزمِ ادب</span>
                        <span className="font-playfair text-xl font-bold tracking-tight text-slate-800 uppercase no-underline">BAZM-E-<span className="italic text-gold">ADAB</span></span>
                    </a>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-slate-600 font-medium text-[13px] uppercase tracking-wider hover:text-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full no-underline">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={onSearchClick}
                        className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:bg-gold hover:text-white transition-all duration-500 hover:shadow-lg hover:shadow-gold/20"
                    >
                        <Search size={22} />
                    </button>

                    <a href="#join" className="hidden md:block btn-primary !px-8 !py-3 no-underline shadow-none hover:shadow-gold/30">Join Us</a>

                    <button className="md:hidden text-slate-800 outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-white shadow-2xl p-8 flex flex-col gap-6 md:hidden">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-slate-800 hover:text-gold transition-colors no-underline">
                                {link.name}
                            </a>
                        ))}
                        <a href="#join" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full text-center no-underline">Join Us</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
