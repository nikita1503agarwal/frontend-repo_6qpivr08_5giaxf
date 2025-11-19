import { useState } from 'react'
import { motion } from 'framer-motion'

const feelings = [
  { key: 'happy', color: 'bg-yellow-400', label: 'Happy' },
  { key: 'calm', color: 'bg-teal-400', label: 'Calm' },
  { key: 'okay', color: 'bg-blue-300', label: 'Okay' },
  { key: 'sad', color: 'bg-blue-500', label: 'Sad' },
  { key: 'mad', color: 'bg-red-400', label: 'Mad' },
  { key: 'worried', color: 'bg-purple-400', label: 'Worried' }
]

export default function EmotionCheck({ onSelect }) {
  const [selected, setSelected] = useState(null)
  return (
    <div className="space-y-6">
      <h2 className="text-white text-2xl font-semibold">How are you feeling?</h2>
      <div className="grid grid-cols-3 gap-4">
        {feelings.map((f) => (
          <motion.button
            key={f.key}
            onClick={() => { setSelected(f.key); onSelect && onSelect(f.key) }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square rounded-2xl ${f.color} text-slate-900 font-bold flex items-center justify-center shadow-lg ${selected===f.key ? 'ring-4 ring-white/70' : ''}`}
          >
            {f.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
