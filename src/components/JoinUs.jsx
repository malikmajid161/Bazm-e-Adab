import { motion } from 'framer-motion'

const JoinUs = ({ onSubmit, isSubmitting }) => (
    <section id="join" className="py-20 px-6 bg-white overflow-hidden">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#fdfbf7] rounded-[60px] border border-black/5 p-8 md:p-16 shadow-2xl shadow-black/5 relative overflow-hidden"
        >
            <div className="urdu absolute -bottom-10 -left-10 text-[12rem] opacity-[0.02] pointer-events-none select-none">بزم</div>
            <div className="text-center mb-12 relative z-10">
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">Join the Society</h2>
                <p className="text-lg text-slate-500">Step into a world where your creativity is celebrated.</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 ml-2">Full Name</label>
                        <input name="full_name" type="text" required placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 ml-2">COMSATS Email</label>
                        <input name="email" type="email" required placeholder="name@student.comsats.edu.pk" className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all" />
                    </motion.div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 ml-2">Phone Number</label>
                        <input name="phone" type="tel" required placeholder="+92 300 0000000" className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 ml-2">Department</label>
                        <input name="department" type="text" required placeholder="e.g. Computer Science" className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all" />
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-2">Preferred Role / Interest</label>
                    <select name="role_interest" required className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all appearance-none cursor-pointer">
                        <option value="">Select a Path</option>
                        <option value="Writer">Creative Writer (Prose)</option>
                        <option value="Poet">Poet (Shayer)</option>
                        <option value="Management">Management & Events</option>
                        <option value="Media">Media & Graphics</option>
                        <option value="PublicSpeaking">Public Speaking / Host</option>
                    </select>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-2">Skills & Portfolio (Short description)</label>
                    <input name="skills" type="text" placeholder="Writing, Photoshop, Stage presence..." className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-2">Why join us?</label>
                    <textarea name="message" rows="4" placeholder="Share your literary passion..." className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all resize-none"></textarea>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full !py-5 shadow-2xl border-none ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Processing Application...' : 'Submit Membership Application'}
                </motion.button>
            </form>
        </motion.div>
    </section>
)

export default JoinUs
