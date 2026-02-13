import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Stars, Float } from '@react-three/drei';

const ElegantSphere = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.15;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={1.2}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#000000"
                    emissive="#D4AF37"
                    emissiveIntensity={0.8}
                    wireframe={true}
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    );
};

const HeroScene = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, background: 'radial-gradient(circle at center, #111 0%, #000 70%)' }}>
            <Canvas camera={{ position: [0, 0, 4] }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#D4AF37" />

                <ElegantSphere />

                <Sparkles count={100} scale={5} size={1} speed={0.2} opacity={0.4} color="#D4AF37" />
            </Canvas>
        </div>
    );
};

export default HeroScene;
