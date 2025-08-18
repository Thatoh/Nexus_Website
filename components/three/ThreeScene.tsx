import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      {/* Lights / Env */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <Environment preset="city" />

      {/* Demo mesh (replace with your model later) */}
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="#00e08a" />
      </mesh>

      {/* Controls */}
      <OrbitControls enableDamping />
    </Canvas>
  );
}
