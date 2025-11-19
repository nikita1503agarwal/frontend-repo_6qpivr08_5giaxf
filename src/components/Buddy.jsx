import { motion } from 'framer-motion'

const eyesVariants = {
  blink: {
    scaleY: [1, 0.1, 1],
    transition: { duration: 0.25 }
  }
}

export default function Buddy({ onNext }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        className="relative w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-3xl bg-white/10" />
        {/* Eyes */}
        <div className="absolute top-16 left-10 flex gap-10">
          <motion.div
            variants={eyesVariants}
            animate="blink"
            transition={{ repeat: Infinity, delay: 2, repeatDelay: 3 }}
            className="w-6 h-6 bg-white rounded-full shadow-inner"
          />
          <motion.div
            variants={eyesVariants}
            animate="blink"
            transition={{ repeat: Infinity, delay: 2.2, repeatDelay: 3 }}
            className="w-6 h-6 bg-white rounded-full shadow-inner"
          />
        </div>
        {/* Smile */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-16 h-8 border-b-4 border-white/90 rounded-b-full" />
      </motion.div>

      <p className="text-blue-100">Tap the buddy to say hello!</p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
      >
        Next
      </motion.button>
    </div>
  )
}
