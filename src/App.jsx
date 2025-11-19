import { useState } from 'react'
import Home from './components/Home'
import Buddy from './components/Buddy'
import EmotionCheck from './components/EmotionCheck'
import CalmingActivity from './components/CalmingActivity'
import TransitionCountdown from './components/TransitionCountdown'
import Rewards from './components/Rewards'

function App() {
  const [screen, setScreen] = useState('home')
  const [stars, setStars] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative max-w-md mx-auto px-6 py-10">
        <div className="mb-6 text-center">
          <div className="text-blue-200 text-sm">BuddyFocus</div>
          <div className="text-white/90 text-xs">A playful prototype</div>
        </div>

        {screen === 'home' && (
          <Home onStart={() => setScreen('buddy')} />
        )}

        {screen === 'buddy' && (
          <div className="space-y-6">
            <Buddy onNext={() => setScreen('emotion')} />
          </div>
        )}

        {screen === 'emotion' && (
          <div className="space-y-6">
            <EmotionCheck onSelect={() => setScreen('calm')} />
          </div>
        )}

        {screen === 'calm' && (
          <CalmingActivity onDone={() => setScreen('countdown')} />
        )}

        {screen === 'countdown' && (
          <TransitionCountdown seconds={10} onComplete={() => { setStars((s)=>Math.min(5, s+1)); setScreen('rewards') }} />
        )}

        {screen === 'rewards' && (
          <Rewards stars={stars} onReset={() => { setStars(0); setScreen('home') }} />
        )}
      </div>
    </div>
  )
}

export default App
