import React, { Suspense } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'

const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<p>Loading...</p>}>
        <Model modelPath={modelPath} />
      </Suspense>
    </Canvas>
  )
}

function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef(null)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  if (!ref) return
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Model = ({ modelPath }: { modelPath: string }) => {
  try {
    const gltf = useLoader(GLTFLoader, modelPath)
    return <primitive object={gltf.scene} />
  } catch (err) {
    console.error(err)
    return <Box position={[0, 0, 0]} />
  }
}

export default ModelViewer
