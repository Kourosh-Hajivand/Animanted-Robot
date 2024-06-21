"use client"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './Model'
import { Html, OrbitControls, ScrollControls, useProgress } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

function Loader() {
    const { progress, active } = useProgress()
    return <Html center><p className='text-white font-bold whitespace-nowrap'>{progress.toFixed(1)} % Loaded</p></Html>
}

function Scene() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className='relative h-vh'>
            {!isMobile &&
                <OrbitControls enableZoom={false} />
            }
            <directionalLight position={[-5, -5, 5]} intensity={3} />
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.5} pages={20}>
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas >
    )
}

export default Scene
