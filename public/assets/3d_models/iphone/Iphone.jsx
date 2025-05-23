import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Iphone(props) {
  const groupRef = useRef()
  const centerRef = useRef()
  const { nodes, materials } = useGLTF('/assets/3d_models/iphone/iphone.gltf')

  useEffect(() => {
    if (groupRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current)
      const center = new THREE.Vector3()
      box.getCenter(center)

      groupRef.current.position.sub(center)
    }
  }, [])

  useGSAP(() => {
    if (!groupRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#mobile-section',
        start: 'top top',
        end: '+=4000',
        pin: true,
        scrub: true,
      },
    })

    tl.fromTo(groupRef.current.position, {
      y: -10,
      z: 0,
    },
      {
        y: -2.7,
        z: -5,
      }, 'x');

    tl.fromTo(groupRef.current.rotation, {
      x: 0,
      y: 0,
      z: 0,
    },
      {
        x: -0.2,
        y: -0.2,
        z: 0,
      }, 'x');


  })


  return (
    <group ref={centerRef} {...props}>
      <group ref={groupRef} dispose={null}>
        <group position={[0, -2.588, 2.419]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={10}>
              {/* all meshes */}
              <mesh castShadow receiveShadow geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry} material={materials.BodyFrame} />
              <mesh castShadow receiveShadow geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry} material={materials.MicrophoneSpeaker} />
              <mesh castShadow receiveShadow geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry} material={materials.GrayGlossy2} />
              <mesh castShadow receiveShadow geometry={nodes.iPhone__12_Pro_Antenna_0.geometry} material={materials.Antenna} />
              <mesh castShadow receiveShadow geometry={nodes.iPhone12_Pro_Body_0.geometry} material={materials.Body} />
              <mesh castShadow receiveShadow geometry={nodes.Camera1_PacificBlue_0.geometry} material={materials.PacificBlue} />
              <mesh castShadow receiveShadow geometry={nodes.Camera1_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
              <mesh castShadow receiveShadow geometry={nodes.Camera1_FrontCamera_0.geometry} material={materials.FrontCamera} />
              <mesh castShadow receiveShadow geometry={nodes.Camera1_Blackmatte_0.geometry} material={materials.Blackmatte} />
              <mesh castShadow receiveShadow geometry={nodes.Camera1_Cameralens_0.geometry} material={materials.Cameralens} />
              <mesh castShadow receiveShadow geometry={nodes.Camera1_Glass_0.geometry} material={materials.Glass} />
              <mesh castShadow receiveShadow geometry={nodes.Flash_Flash2_0.geometry} material={materials.Flash2} />
              <mesh castShadow receiveShadow geometry={nodes.Flash_Flash_0.geometry} material={materials.Flash} />
              <mesh castShadow receiveShadow geometry={nodes.LiDar_LiDar__0.geometry} material={materials.LiDar} />
              <mesh castShadow receiveShadow geometry={nodes.Bezel_bezel_0.geometry} material={materials.bezel} />
              <mesh castShadow receiveShadow geometry={nodes.FrontCamera_Cameralens_0.geometry} material={materials.Cameralens} />
              <mesh castShadow receiveShadow geometry={nodes.FrontCamera_FrontCamera_0.geometry} material={materials.FrontCamera} />
              <mesh castShadow receiveShadow geometry={nodes.FrontCamera_Glass_0.geometry} material={materials.Glass} />
              <mesh castShadow receiveShadow geometry={nodes.FrontMic_GrayGlossy2_0.geometry} material={materials.GrayGlossy2} />
              <mesh castShadow receiveShadow geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry} material={materials.MicrophoneSpeaker} />
              <mesh castShadow receiveShadow geometry={nodes.FrontCamera001_bezel001_0.geometry} material={materials['bezel.001']} position={[0, 0, -0.001]} />
              <mesh castShadow receiveShadow geometry={nodes.Camera3_PacificBlue_0.geometry} material={materials.PacificBlue} />
              <mesh castShadow receiveShadow geometry={nodes.Camera3_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
              <mesh castShadow receiveShadow geometry={nodes.Camera3_FrontCamera_0.geometry} material={materials.FrontCamera} />
              <mesh castShadow receiveShadow geometry={nodes.Camera3_Blackmatte_0.geometry} material={materials.Blackmatte} />
              <mesh castShadow receiveShadow geometry={nodes.Camera3_Cameralens_0.geometry} material={materials.Cameralens} />
              <mesh castShadow receiveShadow geometry={nodes.Camera3_Glass_0.geometry} material={materials.Glass} />
              <mesh castShadow receiveShadow geometry={nodes.Camera2_PacificBlue_0.geometry} material={materials.PacificBlue} />
              <mesh castShadow receiveShadow geometry={nodes.Camera2_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
              <mesh castShadow receiveShadow geometry={nodes.Camera2_FrontCamera_0.geometry} material={materials.FrontCamera} />
              <mesh castShadow receiveShadow geometry={nodes.Camera2_Blackmatte_0.geometry} material={materials.Blackmatte} />
              <mesh castShadow receiveShadow geometry={nodes.Camera2_Cameralens_0.geometry} material={materials.Cameralens} />
              <mesh castShadow receiveShadow geometry={nodes.Camera2_Glass_0.geometry} material={materials.Glass} />
              <mesh castShadow receiveShadow geometry={nodes.Screen_Wallpaper_0.geometry} material={materials.Wallpaper} />
              <mesh castShadow receiveShadow geometry={nodes.Apple_Logo_Logo_0.geometry} material={materials.Logo} />
              <mesh castShadow receiveShadow geometry={nodes.CameraModule001_Glass_0.geometry} material={materials.Glass} />
              <mesh castShadow receiveShadow geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry} material={materials.MicrophoneSpeaker} />
              <mesh castShadow receiveShadow geometry={nodes.VolumeButton_BodyFrame_0.geometry} material={materials.BodyFrame} />
              <mesh castShadow receiveShadow geometry={nodes.PowerButton_BodyFrame_0.geometry} material={materials.BodyFrame} />
              <mesh castShadow receiveShadow geometry={nodes.Port_Blackmatte_0.geometry} material={materials.Blackmatte} />
              <mesh castShadow receiveShadow geometry={nodes.Port_BodyFrame_0.geometry} material={materials.BodyFrame} />
              <mesh castShadow receiveShadow geometry={nodes.SimTray_Blackmatte_0.geometry} material={materials.Blackmatte} />
              <mesh castShadow receiveShadow geometry={nodes.SimTray_BodyFrame_0.geometry} material={materials.BodyFrame} />
              <mesh castShadow receiveShadow geometry={nodes.MuteButton_BodyFrame_0.geometry} material={materials.BodyFrame} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3d_models/iphone/iphone.gltf')
