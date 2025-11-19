import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CalmingActivity({ onDone }) {
  const [count, setCount] = useState(4)
  const [phase, setPhase] = useState('breathe in')

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c === 1) {
          setPhase((p) => (p === 'breathe in' ? 'hold' : p === 'hold' ? 'breathe out' : 'breathe in'))
          return 4
        }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-white text-2xl font-semibold">Calm Breathing</h2>
      <div className="flex flex-col items-center gap-6">
        <motion.div
          key={phase+count}
          initial={{ scale: 0.9 }}
          animate={{ scale: phase === 'breathe in' ? 1.15 : phase === 'hold' ? 1.05 : 0.9 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 shadow-2xl"/>
        <div className="text-blue-100 text-lg capitalize">{phase}</div>
        <div className="text-5xl font-bold text-white tabular-nums">{count}</div>
        <button onClick={onDone} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white">I'm calm</button>
      </div>
      <div className="grid grid-cols-3 gap-3 text-center text-blue-200/80">
        <div className="p-3 rounded-xl bg-white/5">Breathing</div>
        <div className="p-3 rounded-xl bg-white/5">Color focus</div>
        <div className="p-3 rounded-xl bg-white/5">Rainbow trace</div>
      </div>
    </div>
  )
}
