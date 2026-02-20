import React, { useState, useMemo, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Book, Feather, ScrollText } from 'lucide-react'

const SearchOverlay = memo(({ isOpen, onClose, data }) => {
    const [query, setQuery] = useState('')

    const allItems = useMemo(() => [
        ...data.literature.map(item => ({ ...item, category: item.type })),
        ...data.library.map(item => ({ ...item, category: item.type, isBook: true }))
    ], [data])

    const results = useMemo(() => {
        if (!query) return []
        const lowercaseQuery = query.toLowerCase()
        return allItems.filter(item =>
            item.title?.toLowerCase().includes(lowercaseQuery) ||
            item.author.toLowerCase().includes(lowercaseQuery) ||
            item.type.toLowerCase().includes(lowercaseQuery) ||
            item.lines?.some(line => line.includes(query))
        )
    }, [query, allItems])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[3000] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-start pt-32 px-6"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-10 right-10 p-4 hover:rotate-90 transition-transform duration-500 text-slate-400"
                    >
                        <X size={32} />
                    </button>

                    <div className="w-full max-w-3xl">
                        <div className="relative mb-12">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gold" size={32} />
                            <input
                                autoFocus
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search for Sher, Nasr, or Novels..."
                                className="w-full bg-slate-50 border-none rounded-[32px] py-8 pl-20 pr-10 text-2xl font-playfair focus:ring-4 focus:ring-gold/10 transition-all outline-none"
                            />
                        </div>

                        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                            {results.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => {
                                        if (item.link) {
                                            window.open(item.link, '_blank')
                                        }
                                        onClose()
                                    }}
                                    className="p-8 rounded-3xl bg-white border border-black/5 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all group cursor-pointer"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                                            {item.isBook ? <Book size={20} /> : (item.type === 'Ghazal' ? <ScrollText size={20} /> : <Feather size={20} />)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[10px] font-bold tracking-[3px] uppercase text-gold">{item.category}</span>
                                                <span className="text-xs text-slate-400">{item.author}</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title || item.lines?.[0]}</h4>
                                            {item.desc && <p className="text-sm text-slate-500 line-clamp-2">{item.desc}</p>}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {query && results.length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-slate-400 text-lg">No results found for "{query}"</p>
                                    <p className="text-gold text-sm mt-2">Try searching for Ghalib, Iqbal, or Peer-e-Kamil</p>
                                </div>
                            )}

                            {!query && (
                                <div className="text-center py-20 opacity-30">
                                    <Search size={64} className="mx-auto mb-6" />
                                    <p className="text-lg">Start typing to explore the literary world...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
})

export default SearchOverlay
