import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import PoetryMarquee from '../components/PoetryMarquee'
import LiteratureShowcase from '../components/LiteratureShowcase'
import Library from '../components/Library'
import ServiceCard from '../components/ServiceCard'
import TeamCard from '../components/TeamCard'
import JoinUs from '../components/JoinUs'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { societyData } from '../data/societyData'
import useCarousel from '../hooks/useCarousel'

// Icons mapping for Offerings
import { Feather, PenTool, Mic, Users, Trophy, Layout } from 'lucide-react'
const iconMap = { Feather, PenTool, Mic, Users, Trophy, Layout }

const Home = () => {
    // Auto-cycling clubs
    const { currentIndex: activeClubIdx } = useCarousel(societyData.clubs.length, 4000)

    return (
        <>
            <Hero />
            <About data={societyData.vision} />
            <PoetryMarquee />

            <LiteratureShowcase items={societyData.literature} />

            <section className="section-alt overflow-hidden">
                <Library books={societyData.library} />
            </section>

            {/* Offerings Carousel */}
            <section id="services" className="py-28 px-6 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
                        >
                            Our Offerings
                        </motion.h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Structured programs designed to nurture the literary artist within you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {societyData.clubs.slice(activeClubIdx, activeClubIdx + 3).concat(
                                societyData.clubs.slice(0, Math.max(0, (activeClubIdx + 3) - societyData.clubs.length))
                            ).map((item, idx) => (
                                <ServiceCard
                                    key={item.title}
                                    {...item}
                                    icon={iconMap[item.iconName]}
                                    delay={idx * 0.1}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Featured Team Preview */}
            <section id="team-preview" className="py-28 px-6 section-alt">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 font-serif">Meet the Leadership</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">A diverse group of literary enthusiasts and community builders working together to bridge the gap between tradition and modern expression.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto px-4">
                        {societyData.team.slice(0, 4).map((member, idx) => (
                            <TeamCard key={idx} {...member} isFemale={member.isFemale} />
                        ))}
                    </div>
                    
                    <div className="text-center mt-20">
                         <p className="text-slate-400 italic mb-6">And {societyData.team.length - 4}+ other amazing contributors</p>
                         <Link to="/team" className="text-brand font-bold hover:underline inline-flex items-center gap-2">
                            View all members <span>→</span>
                         </Link>
                    </div>
                </div>
            </section>

            <JoinUs />
        </>
    )
}

export default Home
