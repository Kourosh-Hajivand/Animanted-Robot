import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from 'react'
import { Group } from "three";

useGLTF.preload("/robot_playground.glb")

function Model() {
    const group = useRef<Group>(null)
    const { nodes, materials, scene, animations } = useGLTF("/robot_playground.glb")
    const { actions, clips } = useAnimations(animations, scene)
    const scroll = useScroll()
    useEffect(() => {
        //@ts-ignore
        actions["Experiment"].play().paused = true
    })
    useFrame(() => {

        //@ts-ignore
        (actions["Experiment"].time =
            //@ts-ignore
            (actions["Experiment"].getClip().duration * scroll.offset) / 2)
    })
    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}

export default Model