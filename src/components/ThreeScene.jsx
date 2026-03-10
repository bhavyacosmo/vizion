import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Points, PointMaterial, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function DriftingOrb() {
    const meshRef = useRef()
    const { viewport } = useThree()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        // Smooth drifting movement across larger part of the screen
        meshRef.current.position.x = Math.sin(time * 0.2) * (viewport.width / 3)
        meshRef.current.position.y = Math.cos(time * 0.3) * (viewport.height / 3)

        // Subtle rotation
        meshRef.current.rotation.x = time * 0.1
        meshRef.current.rotation.y = time * 0.15
    })

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[3.5, 128, 128]} />
            <MeshDistortMaterial
                color="#FFD700"
                distort={0.5}
                speed={1.5}
                roughness={0.7} // Blurred/soft look
                metalness={0.1}
                transparent
                opacity={0.4}
                emissive="#FFD700"
                emissiveIntensity={0.3}
            />
        </mesh>
    )
}

function NetworkBackground() {
    const pointsRef = useRef()
    const particlesCount = 1200
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3)
        for (let i = 0; i < particlesCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40
            pos[i * 3 + 2] = (Math.random() - 0.5) * 40
        }
        return pos
    }, [])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        pointsRef.current.rotation.y = time * 0.02
        pointsRef.current.rotation.x = time * 0.01
    })

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#FFD700"
                size={0.04}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.3}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    )
}

const ThreeScene = () => {
    return (
        <div className="three-canvas-container">
            <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
                <color attach="background" args={['#020202']} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFD700" />
                <spotLight position={[-15, 25, 10]} angle={0.25} penumbra={1} intensity={1} color="#FFD700" />

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.4} />
                <NetworkBackground />
                <DriftingOrb />
            </Canvas>
        </div>
    )
}

export default ThreeScene
