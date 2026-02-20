import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, TrendingUp } from 'lucide-react'

const Library = memo(({ books }) => (
    <section id="library" className="py-28 px-6 bg-[#fdfbf7] relative overflow-hidden">
        <div className="urdu absolute top-10 right-10 text-[10rem] opacity-[0.03] pointer-events-none select-none">کتب خانہ</div>
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6"
                >
                    Digital Library
                </motion.h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">Access a curated selection of trending novels, classic poetry, and literary masterpieces.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {books.map((book, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass-card !p-8 group relative"
                    >
                        {book.trending && (
                            <div className="absolute top-4 right-4 bg-gold/10 text-gold text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                <TrendingUp size={12} /> TRENDING
                            </div>
                        )}
                        <div className="w-12 h-12 bg-gold/5 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                            <BookOpen size={24} />
                        </div>
                        <span className="text-[10px] tracking-[2px] uppercase text-slate-400 font-bold mb-2 block">{book.type}</span>
                        <h3 className="text-xl font-playfair font-bold text-slate-800 mb-2 group-hover:text-gold transition-colors">{book.title}</h3>
                        <p className="text-slate-500 text-sm mb-6">— By {book.author}</p>

                        <a
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:gap-3 transition-all"
                        >
                            Read Now <ExternalLink size={14} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
))

export default Library
