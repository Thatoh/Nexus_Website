import { useGLTF } from "@react-three/drei";
import { useMemo, useState } from "react";

type Props = {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

export default function Model({ url, ...props }: Props) {
  const [hasError, setHasError] = useState(false);
  
  try {
    const gltf = useGLTF(url);
    const scene = useMemo(() => gltf.scene.clone(), [gltf.scene]); // isolate instance
    
    if (hasError) setHasError(false);
    
    return <primitive object={scene} {...props} />;
  } catch (error) {
    console.error('Failed to load 3D model:', error);
    setHasError(true);
    return null; // Return null if model fails to load
  }
}

// Optional: preload common paths
useGLTF.preload("/models/bytedesk.glb");
