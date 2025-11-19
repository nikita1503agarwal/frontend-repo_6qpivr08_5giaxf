import { motion } from 'framer-motion'
import { Star, Gift } from 'lucide-react'

export default function Rewards({ stars = 3, onReset }) {
  return (
    <div className="space-y-6">
      <h2 className="text-white text-2xl font-semibold">Rewards</h2>
      <div className="flex items-center justify-center gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div key={i} initial={{ scale: 0.8 }} animate={{ scale: i < stars ? 1.1 : 1 }} className={`p-3 rounded-full ${i < stars ? 'bg-yellow-400 text-slate-900' : 'bg-white/10 text-white'}`}>
            <Star className="w-6 h-6" fill={i < stars ? 'currentColor' : 'none'} />
          </motion.div>
        ))}
      </div>
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-100 flex items-center gap-3">
        <Gift className="w-6 h-6" />
        Earn stars by completing calm activities and transitions.
      </div>
      <div className="text-center">
        <button onClick={onReset} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white">Back to start</button>
      </div>
    </div>
  )
}
