'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { Mesh, BoxGeometry, MeshStandardMaterial, Color, ACESFilmicToneMapping } from 'three'
import { useAppContext } from '@/lib/context/AppContext'

function ThreeCube() {
  const { value, setRandomColorValue } = useAppContext()
  const cubeRef = useRef<Mesh>(null)

  const boxGeometry = new BoxGeometry(0.02, 0.02, 0.02)
  const materialColor = new Color('white')
  let boxMaterial = new MeshStandardMaterial({ color: materialColor })

  useEffect(() => {
    if (
      cubeRef.current &&
      cubeRef.current.material instanceof MeshStandardMaterial
    ) {
      cubeRef.current.material.color.set(`hsl(${value}, 100%, 75%)`)
    }
  }, [value])

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x -= delta * 0.12
      cubeRef.current.rotation.y -= delta * 0.25
    }
  })

  const eventHandler = () => {
    setRandomColorValue()
  }

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <mesh
          onClick={eventHandler}
          ref={cubeRef}
          position={[0, 0, 0]}
          castShadow
          receiveShadow
          scale={2}
          onPointerEnter={() => {
            document.body.style.cursor = 'pointer'
          }}
          onPointerLeave={() => {
            document.body.style.cursor = 'default'
          }}
        >
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial
            color='hotpink'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
        </mesh>
      </Float>
    </>
  )
}

const CubeCanvas = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      flat
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping
      }}
      camera={{
        fov: 45,
        zoom: 0.5,
        near: 0.1,
        far: 200,
        position: [3, 2, 6]
      }}
    >
      <OrbitControls enableZoom={false} />
      <ThreeCube />
    </Canvas>
  )
}

export default CubeCanvas
