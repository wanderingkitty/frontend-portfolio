import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import FloatingLabels from './FloatingLabels'

function Model() {
  const gltf = useGLTF('/tower1.glb')
  return (
    <primitive
      object={gltf.scene}
      scale={[0.4, 0.4, 0.4]}
      position={[0, -2.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  )
}

export default function ModelViewer() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 6], fov: 40 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    >
      {/* Тёмно-серый фон, как на твоём референсе */}
<color attach="background" args={['#2f2f2f']} />


      {/* Мягкий рассеянный свет */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight
        position={[3, 5, 2]}
        intensity={9}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Модель */}
      <Model />
<FloatingLabels /> 
      {/* Немного bloom, если хочешь свечения */}
      <EffectComposer>
        <Bloom
          intensity={0.1}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.9}
          height={300}
        />
      </EffectComposer>

      {/* Управление камерой */}
      <OrbitControls
        enableZoom
        minDistance={4}
        maxDistance={9}
        enablePan={false}
        enableRotate={true}
      />
    </Canvas>
  )
}
