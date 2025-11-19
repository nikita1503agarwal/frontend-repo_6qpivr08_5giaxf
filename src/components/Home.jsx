import { motion } from 'framer-motion'
import { Sparkles, Play } from 'lucide-react'

export default function Home({ onStart }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm">A calm, friendly focus buddy</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          BuddyFocus
        </h1>
        <p className="max-w-xl text-blue-200/90">
          A playful companion that helps kids check feelings, calm down, and focus through gentle activities.
        </p>
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          onClick={onStart}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/30"
        >
          <Play className="w-5 h-5" /> Start
        </motion.button>
      </motion.div>
    </div>
  )
}
