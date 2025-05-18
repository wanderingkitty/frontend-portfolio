import { Html } from '@react-three/drei'

export default function FloatingLabels() {
  return (
    <>
      <Html position={[-2, -2.2, 0]}>
        <div className="floating-label">// about</div>
      </Html>
      <Html position={[1.5, -2.1, -1]}>
        <div className="floating-label">// experience</div>
      </Html>
      <Html position={[0, -1.5, 2]}>
        <div className="floating-label">// work</div>
      </Html>
      <Html position={[0.5, -2, -3]}>
        <div className="floating-label">// contact</div>
      </Html>
    </>
  )
}
