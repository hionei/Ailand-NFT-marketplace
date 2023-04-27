import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
    </Canvas>
  )
}

const Model = ({ modelPath }: { modelPath: string }) => {
  const gltf = useLoader(GLTFLoader, modelPath)
  return <primitive object={gltf.scene} />
}

export default ModelViewer
