// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, useGLTF, Html } from '@react-three/drei'
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
// import { useState } from 'react'

// function InteractiveModel() {
//   const gltf = useGLTF('/tower1.glb')
//   const [hoverInfo, setHoverInfo] = useState(null)

//   // Простая проверка областей (расширенные зоны для лучшего попадания)
//   const getAreaInfo = (x, y, z) => {
//     // Левое окно - about (большая область)
//     if (x < -0.02 && y > -1.2 && y < -0.4 && z > 0.1) {
//       return { section: 'about', pos: [x - 0.5, y + 0.3, z + 0.3] }
//     }
    
//     // Правое окно - contact (большая область)
//     if (x > 0.02 && y > -1.2 && y < -0.4 && z > 0.1) {
//       return { section: 'contact', pos: [x + 0.5, y + 0.3, z + 0.3] }
//     }
    
//     // Верхняя часть башни - experience
//     if (Math.abs(x) < 0.3 && y > -0.3 && y < 0.5 && z > -0.2) {
//       return { section: 'experience', pos: [0, y + 0.4, z + 0.4] }
//     }
    
//     // Нижняя часть - work
//     if (Math.abs(x) < 0.4 && y > -2.2 && y < -1.3 && z > -0.3) {
//       return { section: 'work', pos: [0, y + 0.4, z + 0.4] }
//     }
    
//     return null
//   }

//   const onPointerMove = (e) => {
//     const point = e.point
//     const info = getAreaInfo(point.x, point.y, point.z)
//     setHoverInfo(info)
//   }

//   const onPointerLeave = () => {
//     setHoverInfo(null)
//   }

//   const onClick = (e) => {
//     e.stopPropagation()
//     const point = e.point
//     const info = getAreaInfo(point.x, point.y, point.z)
    
//     if (info) {
//       const el = document.querySelector(`.${info.section}`)
//       if (el) {
//         el.scrollIntoView({ behavior: 'smooth', block: 'start' })
//       }
//     }
//   }

//   return (
//     <group>
//       <primitive
//         object={gltf.scene}
//         scale={0.4}
//         position={[0, -2.5, 0]}
//         rotation={[0, Math.PI, 0]}
//         onPointerMove={onPointerMove}
//         onPointerLeave={onPointerLeave}
//         onClick={onClick}
//       />
      
//       {hoverInfo && (
//         <Html position={hoverInfo.pos}>
//           <div className="hover-tooltip window-tooltip">
//             // {hoverInfo.section}
//           </div>
//         </Html>
//       )}
//     </group>
//   )
// }

// export default function ModelViewer() {
//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 2, 6], fov: 40 }}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100vh',
//         zIndex: 0,
//         pointerEvents: 'auto',
//       }}
//     >
//       <color attach="background" args={['#2f2f2f']} />

//       <ambientLight intensity={0.4} />
//       <directionalLight
//         position={[3, 5, 2]}
//         intensity={9}
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//       />

//       <InteractiveModel />

//       <EffectComposer>
//         <Bloom
//           intensity={0.15}
//           luminanceThreshold={0.8}
//           luminanceSmoothing={0.9}
//           height={300}
//         />
//       </EffectComposer>

//       <OrbitControls
//         enableZoom
//         minDistance={4}
//         maxDistance={9}
//         enablePan={false}
//         enableRotate={true}
//       />
//     </Canvas>
//   )
// }