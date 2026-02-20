import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin, ChevronUp } from 'lucide-react'

const Footer = ({ socialLinks }) => {
    const platforms = [
        { Icon: Instagram, link: socialLinks?.instagram },
        { Icon: Facebook, link: socialLinks?.facebook },
        { Icon: Twitter, link: socialLinks?.twitter },
        { Icon: Linkedin, link: socialLinks?.linkedin }
    ]

    return (
        <footer className="py-20 px-6 bg-white border-t border-slate-100 text-center relative">
            <div className="flex justify-center gap-8 mb-12">
                {platforms.map(({ Icon, link }, id) => (
                    <a
                        key={id}
                        href={link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-gold hover:text-white hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 border border-slate-100 no-underline"
                    >
                        <Icon size={24} />
                    </a>
                ))}
            </div>
            <div className="font-playfair text-2xl font-bold mb-4 uppercase tracking-tighter">BAZM-E-<span className="text-gold italic">ADAB</span></div>
            <p className="text-slate-400 font-medium">&copy; 2026 COMSATS Literary Society. Reviving Art, Honoring Traditions.</p>
            <button className="mt-16 group flex flex-col items-center gap-2 mx-auto outline-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-gold font-bold tracking-widest text-[10px]">BACK TO TOP</span>
                <ChevronUp className="text-gold group-hover:-translate-y-2 transition-transform duration-300" />
            </button>
        </footer>
    )
}

export default Footer
