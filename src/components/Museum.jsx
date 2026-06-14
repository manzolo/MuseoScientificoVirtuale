import { Float, Html, Sparkles, Stars, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { ROOMS, copy } from '../data/rooms'

function Architecture() {
  const roomData = [
    { position: [0, 0, 0], color: '#67e8f9' },
    { position: [-34, 0, 0], color: '#f59e0b' },
    { position: [0, 0, -34], color: '#38bdf8' },
    { position: [34, 0, 0], color: '#a78bfa' },
    { position: [0, 0, 34], color: '#34d399' },
  ]
  const corridors = [
    { position: [-17, 0.06, 0], scale: [14, 0.12, 7] },
    { position: [17, 0.06, 0], scale: [14, 0.12, 7] },
    { position: [0, 0.06, -17], scale: [7, 0.12, 14] },
    { position: [0, 0.06, 17], scale: [7, 0.12, 14] },
  ]

  return (
    <group>
      {roomData.map(({ position, color }) => (
        <group key={color} position={position}>
          <mesh receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[27, 0.2, 27]} />
            <meshStandardMaterial color="#0b0e18" metalness={0.75} roughness={0.32} />
          </mesh>
          <mesh position={[0, 7, 13.4]}>
            <boxGeometry args={[27, 14, 0.25]} />
            <meshStandardMaterial color="#080b14" metalness={0.6} />
          </mesh>
          <mesh position={[0, 7, -13.4]}>
            <boxGeometry args={[27, 14, 0.25]} />
            <meshStandardMaterial color="#080b14" metalness={0.6} />
          </mesh>
          <mesh position={[13.4, 7, 0]}>
            <boxGeometry args={[0.25, 14, 27]} />
            <meshStandardMaterial color="#080b14" metalness={0.6} />
          </mesh>
          <mesh position={[-13.4, 7, 0]}>
            <boxGeometry args={[0.25, 14, 27]} />
            <meshStandardMaterial color="#080b14" metalness={0.6} />
          </mesh>
          <mesh position={[0, 0.17, 0]}>
            <boxGeometry args={[25.5, 0.04, 25.5]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.18} transparent opacity={0.16} />
          </mesh>
          <pointLight position={[0, 9, 0]} color={color} intensity={45} distance={25} />
        </group>
      ))}
      {corridors.map(({ position, scale }, index) => (
        <mesh key={index} position={position} receiveShadow>
          <boxGeometry args={scale} />
          <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.25} />
        </mesh>
      ))}
    </group>
  )
}

function Portal({ position, rotation = [0, 0, 0], roomId, context }) {
  const room = ROOMS[roomId]
  const label = room.label[context.language]
  return (
    <group position={position} rotation={rotation}>
      <mesh
        onClick={(event) => {
          event.stopPropagation()
          context.teleport(roomId)
        }}
        onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
        onPointerLeave={() => { document.body.style.cursor = 'default' }}
      >
        <boxGeometry args={[4.8, 6.4, 0.35]} />
        <meshStandardMaterial color="#101827" emissive={room.color} emissiveIntensity={0.65} transparent opacity={0.72} />
      </mesh>
      <Text position={[0, 3.8, 0]} fontSize={0.55} color={room.color} anchorX="center">
        {label.toUpperCase()}
      </Text>
      <mesh position={[0, 0, 0.24]}>
        <planeGeometry args={[4.1, 5.7]} />
        <meshBasicMaterial color={room.color} transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function Hall({ context }) {
  const portals = [
    { roomId: 'chemistry', position: [-12.9, 3.2, 0], rotation: [0, Math.PI / 2, 0] },
    { roomId: 'galaxy', position: [12.9, 3.2, 0], rotation: [0, -Math.PI / 2, 0] },
    { roomId: 'astronomy', position: [0, 3.2, -12.9] },
    { roomId: 'biology', position: [0, 3.2, 12.9], rotation: [0, Math.PI, 0] },
  ]
  return (
    <group>
      <Text position={[0, 9.5, -12.8]} fontSize={1.05} color="#e8fbff" anchorX="center">
        MUSEO SCIENTIFICO VIRTUALE
      </Text>
      <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.45}>
        <group position={[0, 3.7, 0]}>
          <mesh castShadow>
            <icosahedronGeometry args={[2.25, 2]} />
            <meshStandardMaterial color="#071722" emissive="#22d3ee" emissiveIntensity={0.45} wireframe />
          </mesh>
          <mesh scale={0.72}>
            <icosahedronGeometry args={[2.25, 2]} />
            <meshStandardMaterial color="#0e7490" emissive="#67e8f9" emissiveIntensity={1.4} transparent opacity={0.2} />
          </mesh>
        </group>
      </Float>
      {portals.map((portal) => <Portal key={portal.roomId} {...portal} context={context} />)}
    </group>
  )
}

function PeriodicTable({ context }) {
  const group = useRef()
  const cells = useMemo(() => Array.from({ length: 72 }, (_, i) => ({
    x: (i % 12) - 5.5,
    y: Math.floor(i / 12) - 2.5,
    color: i % 4 === 0 ? '#f97316' : i % 3 === 0 ? '#a855f7' : '#fbbf24',
  })), [])
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.08
  })
  return (
    <group position={[-34, 4.5, 0]} ref={group}>
      {cells.map((cell, index) => (
        <mesh key={index} position={[cell.x * 0.72, cell.y * 0.72, Math.sin(index) * 0.15]} castShadow>
          <boxGeometry args={[0.58, 0.58, 0.22]} />
          <meshStandardMaterial color="#17111f" emissive={cell.color} emissiveIntensity={0.75} />
        </mesh>
      ))}
      <Hotspot
        position={[0, -3.3, 0]}
        color="#f59e0b"
        onClick={() => context.setSelected({
          title: copy[context.language].chemistryTitle,
          body: copy[context.language].chemistryBody,
          url: 'https://manzolo.github.io/TavolaPeriodica3D/',
        })}
      />
    </group>
  )
}

function Molecule({ position, colorA, colorB }) {
  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={0.4}>
      <group position={position}>
        <mesh><sphereGeometry args={[0.55, 20, 20]} /><meshStandardMaterial color={colorA} roughness={0.2} /></mesh>
        <mesh position={[1.2, 0.5, 0]}><sphereGeometry args={[0.4, 20, 20]} /><meshStandardMaterial color={colorB} /></mesh>
        <mesh position={[-1.1, 0.65, 0]}><sphereGeometry args={[0.4, 20, 20]} /><meshStandardMaterial color={colorB} /></mesh>
        <mesh position={[0.6, 0.25, 0]} rotation={[0, 0, 1.18]}><cylinderGeometry args={[0.09, 0.09, 1.3]} /><meshStandardMaterial color="#94a3b8" /></mesh>
        <mesh position={[-0.55, 0.32, 0]} rotation={[0, 0, -1]}><cylinderGeometry args={[0.09, 0.09, 1.25]} /><meshStandardMaterial color="#94a3b8" /></mesh>
      </group>
    </Float>
  )
}

function Chemistry({ context }) {
  return (
    <group>
      <PeriodicTable context={context} />
      <Molecule position={[-41, 3, -7]} colorA="#ef4444" colorB="#e2e8f0" />
      <Molecule position={[-41, 3, 7]} colorA="#3b82f6" colorB="#e2e8f0" />
      <Portal position={[-21.1, 3.2, 0]} rotation={[0, -Math.PI / 2, 0]} roomId="hall" context={context} />
    </group>
  )
}

function SolarSystem({ context }) {
  const planets = useRef()
  const data = [
    [2, 0.18, '#9ca3af'], [3, 0.28, '#eab308'], [4.2, 0.32, '#3b82f6'],
    [5.4, 0.25, '#ef4444'], [7, 0.62, '#d97706'], [8.7, 0.53, '#facc15'],
    [10.2, 0.4, '#67e8f9'],
  ]
  useFrame((_, delta) => { if (planets.current) planets.current.rotation.y += delta * 0.12 })
  return (
    <group position={[0, 5, -34]}>
      <mesh>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshStandardMaterial color="#fff7ae" emissive="#fbbf24" emissiveIntensity={3} />
      </mesh>
      <pointLight intensity={130} color="#fef3c7" distance={25} />
      <group ref={planets}>
        {data.map(([radius, size, color], index) => (
          <group key={radius} rotation={[0, index * 0.8, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[radius - 0.015, radius + 0.015, 80]} />
              <meshBasicMaterial color="#334155" transparent opacity={0.65} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[radius, 0, 0]} castShadow>
              <sphereGeometry args={[size, 24, 24]} />
              <meshStandardMaterial color={color} roughness={0.65} />
            </mesh>
          </group>
        ))}
      </group>
      <Hotspot
        position={[0, -3.1, 0]}
        color="#38bdf8"
        onClick={() => context.setSelected({
          title: copy[context.language].astronomyTitle,
          body: copy[context.language].astronomyBody,
          url: 'https://manzolo.github.io/SistemaSolare/',
        })}
      />
      <Portal position={[0, -1.8, 12.9]} rotation={[0, Math.PI, 0]} roomId="hall" context={context} />
    </group>
  )
}

function Galaxy({ context }) {
  const galaxy = useRef()
  const stars = useMemo(() => Array.from({ length: 420 }, (_, i) => {
    const radius = 0.35 * Math.sqrt(i)
    const angle = i * 0.43 + radius * 0.55
    const verticalNoise = Math.sin(i * 12.9898) * 0.5
    return [Math.cos(angle) * radius, verticalNoise * (1.2 - radius * 0.035), Math.sin(angle) * radius]
  }), [])
  useFrame((_, delta) => { if (galaxy.current) galaxy.current.rotation.y -= delta * 0.06 })
  return (
    <group position={[34, 5, 0]}>
      <group ref={galaxy}>
        {stars.map((position, index) => (
          <mesh key={index} position={position}>
            <sphereGeometry args={[index % 19 === 0 ? 0.12 : 0.045, 8, 8]} />
            <meshBasicMaterial color={index % 7 === 0 ? '#f59e0b' : '#c4b5fd'} />
          </mesh>
        ))}
      </group>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.7, 8.2, 96]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
      <Hotspot
        position={[0, -3.1, 0]}
        color="#a78bfa"
        onClick={() => context.setSelected({
          title: copy[context.language].galaxyTitle,
          body: copy[context.language].galaxyBody,
          url: 'https://manzolo.github.io/IfacGalaxy/',
        })}
      />
      <Portal position={[-12.9, -1.8, 0]} rotation={[0, Math.PI / 2, 0]} roomId="hall" context={context} />
    </group>
  )
}

function Biology({ context }) {
  return (
    <group position={[0, 0, 34]}>
      <Float speed={1} rotationIntensity={0.3}>
        <mesh position={[0, 4.2, 0]}>
          <torusKnotGeometry args={[2.2, 0.42, 100, 16, 2, 3]} />
          <meshStandardMaterial color="#052e2b" emissive="#34d399" emissiveIntensity={0.8} wireframe />
        </mesh>
      </Float>
      <Text position={[0, 8.7, -8]} fontSize={0.8} color="#6ee7b7">
        {copy[context.language].biologyTitle.toUpperCase()}
      </Text>
      <Text position={[0, 7.5, -8]} fontSize={0.35} color="#a7f3d0">
        PHASE 02 · COMING SOON
      </Text>
      <Portal position={[0, 3.2, -12.9]} roomId="hall" context={context} />
    </group>
  )
}

function Hotspot({ position, color, onClick }) {
  return (
    <group position={position}>
      <mesh
        onClick={(event) => { event.stopPropagation(); onClick() }}
        onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
        onPointerLeave={() => { document.body.style.cursor = 'default' }}
      >
        <sphereGeometry args={[0.32, 20, 20]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} />
      </mesh>
      <Html center distanceFactor={12} position={[0, 0.75, 0]} style={{ pointerEvents: 'none' }}>
        <span className="world-label">INFO</span>
      </Html>
    </group>
  )
}

export function Museum({ context }) {
  return (
    <>
      <ambientLight intensity={0.16} />
      <directionalLight position={[12, 18, 8]} intensity={0.8} castShadow />
      <Stars radius={120} depth={60} count={1800} factor={2} fade speed={0.25} />
      <Sparkles count={90} scale={[90, 14, 90]} size={1.2} speed={0.15} opacity={0.18} color="#bae6fd" />
      <Architecture />
      <Hall context={context} />
      <Chemistry context={context} />
      <SolarSystem context={context} />
      <Galaxy context={context} />
      <Biology context={context} />
    </>
  )
}
