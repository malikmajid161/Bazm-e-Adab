import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

const Toast = ({ message, type, onClose }) => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        className={`fixed bottom-8 right-8 z-[3000] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 text-white font-medium ${type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'}`}
    >
        {type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
        {message}
        <button onClick={onClose} className="ml-2 hover:opacity-70"><X size={16} /></button>
    </motion.div>
)

export default Toast
