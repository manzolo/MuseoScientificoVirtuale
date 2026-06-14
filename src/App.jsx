import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { Suspense, useCallback, useMemo, useState } from 'react'
import { Museum } from './components/Museum'
import { PlayerControls } from './components/PlayerControls'
import { Interface } from './components/Interface'
import { ROOMS, copy } from './data/rooms'

export default function App() {
  const [started, setStarted] = useState(false)
  const [language, setLanguage] = useState('it')
  const [room, setRoom] = useState('hall')
  const [destination, setDestination] = useState(null)
  const [fly, setFly] = useState(false)
  const [guided, setGuided] = useState(false)
  const [selected, setSelected] = useState(null)
  const [fade, setFade] = useState(false)
  const t = copy[language]

  const teleport = useCallback((roomId) => {
    if (!ROOMS[roomId] || roomId === room) return
    setFade(true)
    window.setTimeout(() => {
      setDestination({ roomId, position: ROOMS[roomId].position })
      setRoom(roomId)
      setSelected(null)
      window.setTimeout(() => setFade(false), 220)
    }, 260)
  }, [room])

  const context = useMemo(() => ({
    language,
    room,
    teleport,
    setSelected,
  }), [language, room, teleport])

  return (
    <main className="app">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ fov: 68, near: 0.1, far: 260, position: ROOMS.hall.position }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#03040a']} />
        <fog attach="fog" args={['#050711', 35, 145]} />
        <Suspense fallback={null}>
          <Museum context={context} />
          <PlayerControls
            active={started}
            destination={destination}
            onDestinationApplied={() => setDestination(null)}
            fly={fly}
          />
          <EffectComposer multisampling={0}>
            <Bloom luminanceThreshold={0.7} intensity={0.9} mipmapBlur />
            <Vignette eskil={false} offset={0.18} darkness={0.72} />
          </EffectComposer>
        </Suspense>
      </Canvas>

      <Interface
        started={started}
        onStart={() => setStarted(true)}
        language={language}
        setLanguage={setLanguage}
        room={room}
        teleport={teleport}
        fly={fly}
        setFly={setFly}
        guided={guided}
        setGuided={setGuided}
        selected={selected}
        setSelected={setSelected}
        fade={fade}
        t={t}
      />
      <Loader />
    </main>
  )
}
