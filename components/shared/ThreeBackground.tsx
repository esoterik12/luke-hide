'use client'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three'
import { useAppContext } from '@/lib/context/AppContext'

export default function ThreeBackground() {
  const { value } = useAppContext()
  const cubesArray = useRef<(Mesh | null)[]>([])
  const boxMaterial = useRef(
    new MeshStandardMaterial({ color: `hsl(${value}, 100%, 75%)` })
  ).current
  const positions = useRef<[number, number, number][]>([])

  // Initialize positions once
  if (positions.current.length === 0) {
    for (let i = 0; i < 250; i++) {
      positions.current.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10
      ])
    }
  }

  // Update material color when value changes
  useEffect(() => {
    boxMaterial.color.set(`hsl(${value}, 100%, 75%)`)
  }, [value, boxMaterial])

  useFrame((state) => {
    const angle = state.clock.elapsedTime * 0.02
    state.camera.position.x = Math.sin(angle) * 2
    state.camera.position.z = Math.cos(angle) * 1
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      {positions.current.map((position, index) => (
        <mesh
          ref={element => {
            cubesArray.current[index] = element
          }}
          key={index}
          geometry={new BoxGeometry(0.01, 0.01, 0.01)}
          material={boxMaterial}
          position={position}
          receiveShadow
        />
      ))}
    </>
  )
}
