import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TransitionCountdown({ seconds = 10, onComplete }) {
  const [time, setTime] = useState(seconds)

  useEffect(() => {
    const t = setInterval(() => {
      setTime((s) => {
        if (s <= 1) {
          clearInterval(t)
          onComplete && onComplete()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [seconds, onComplete])

  const progress = (time / seconds) * 100

  return (
    <div className="space-y-6">
      <h2 className="text-white text-2xl font-semibold">Transition Time</h2>
      <div className="relative w-full h-4 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: `${progress}%` }}
          className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-amber-400 to-pink-500"
        />
      </div>
      <div className="text-center text-5xl text-white font-bold tabular-nums">{time}s</div>
    </div>
  )
}
