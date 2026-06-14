import { PointerLockControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const keys = {}
const forward = new THREE.Vector3()
const right = new THREE.Vector3()
const velocity = new THREE.Vector3()

export function PlayerControls({ active, destination, onDestinationApplied, fly }) {
  const controls = useRef()
  const { camera } = useThree()

  useEffect(() => {
    const down = (event) => { keys[event.code] = true }
    const up = (event) => { keys[event.code] = false }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  useEffect(() => {
    if (!destination) return
    camera.position.fromArray(destination.position)
    velocity.set(0, 0, 0)
    onDestinationApplied()
  }, [camera, destination, onDestinationApplied])

  useFrame((_, delta) => {
    if (!active) return
    const speed = (keys.ShiftLeft ? 14 : 7) * Math.min(delta, 0.05)
    camera.getWorldDirection(forward)
    if (!fly) forward.y = 0
    forward.normalize()
    right.crossVectors(forward, camera.up).normalize()

    const z = Number(keys.KeyW || keys.ArrowUp) - Number(keys.KeyS || keys.ArrowDown)
    const x = Number(keys.KeyD || keys.ArrowRight) - Number(keys.KeyA || keys.ArrowLeft)
    velocity.set(0, 0, 0)
    velocity.addScaledVector(forward, z * speed)
    velocity.addScaledVector(right, x * speed)
    if (fly) velocity.y += (Number(keys.Space) - Number(keys.ControlLeft)) * speed
    camera.position.add(velocity)
    camera.position.y = fly
      ? THREE.MathUtils.clamp(camera.position.y, 1.2, 14)
      : 2.2
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, -52, 52)
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, -52, 52)
  })

  return active ? <PointerLockControls ref={controls} /> : null
}
