// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import { useState } from "react";

// function InteractiveModel() {
//   const gltf = useGLTF("/tower1.glb");

//   return (
//     <primitive
//       object={gltf.scene}
//       scale={0.5}
//       position={[-2, -1, 0]}
//       rotation={[0, 0.3, 0]}
//     />
//   );
// }

// export default function ModelViewer() {
//   return (
//     <Canvas
//       shadows
//       camera={{ position: [-1, 2, 6], fov: 40 }}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         zIndex: 0,
//         pointerEvents: "auto",
//       }}
//     >
//       <color attach="background" args={["#201f1f"]} />

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
//         target={[-1, 0, 0]}
//       />
//     </Canvas>
//   );
// }
