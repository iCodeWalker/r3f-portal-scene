import {
  Center,
  useTexture,
  useGLTF,
  OrbitControls,
  Sparkles,
  shaderMaterial,
} from "@react-three/drei";

import * as THREE from "three";

import { vertexShader, fragmentShader } from "./Shaders";
import { useEffect, useState } from "react";
import { extend } from "@react-three/fiber";
import PortalMaterial from "./PortalMaterial";

// To convert material shader into an r3f tag that can be used in the JSX, we can use the extend method
// const PortalMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uColorStart: new THREE.Color("#0xffffff"),
//     uColorEnd: new THREE.Color("#0x000000"),
//   },
//   vertexShader,
//   fragmentShader
// );

// extend({ PortalMaterial });

export default function Experience() {
  //   const model = useGLTF("./model/portal.glb");
  const { nodes } = useGLTF("./model/portal.glb");
  //   console.log(nodes);

  // Load texture using useTexture helper
  const bakedTexture = useTexture("./model/baked.jpg");
  // fliping y cordinate of the texture
  bakedTexture.flipY = false;
  //   console.log(bakedTexture)

  // Three.js Color
  const poleLightColor = new THREE.Color(0xffffff);

  // For accessing shader in JSX file we use fetch api to call the shaders
  // const [vertexShader, setVertexShader] = useState("void main(){}");
  // const [fragmentShader, setFragmentShader] = useState("void main(){}");

  // useEffect(() => {
  //   // Fetch vertex shader
  //   fetch("./shaders/portal/vertex.glsl")
  //     .then((response) => response.text())
  //     .then((shader) => setVertexShader(shader))
  //     .catch((error) => console.error("Error loading vertex shader:", error));

  //   // Fetch fragment shader
  //   fetch("./shaders/portal/fragment.glsl")
  //     .then((response) => response.text())
  //     .then((shader) => setFragmentShader(shader))
  //     .catch((error) => console.error("Error loading fragment shader:", error));
  // }, []);

  console.log(fragmentShader, vertexShader);

  // if (vertexShader == "void main(){}" && fragmentShader == "void main(){}")
  //   return;

  return (
    <>
      {/* Setting background color */}
      <color args={["#030202"]} attach="background" />

      <OrbitControls makeDefault />
      <Center>
        {/* Portal mesh */}
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {/* Pole light A mesh */}
        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
        >
          <meshBasicMaterial color={poleLightColor} />
        </mesh>

        {/* Pole light B mesh */}
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
        >
          <meshBasicMaterial color={poleLightColor} />
        </mesh>

        {/* Prtal light mesh */}
        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          {/* <meshBasicMaterial color="ffffee" /> */}
          {/* <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              uTime: { value: 0 },
              uColorStart: { value: new THREE.Color("#ffffff") },
              uColorEnd: { value: new THREE.Color("#000000") },
            }}
          /> */}
          <portalMaterial />
        </mesh>

        {/* Sparkles */}
        <Sparkles
          size={6} // size of the particles
          scale={[4, 2, 4]} // area of the cude inside which sparkles are kept
          position-y={1} // postion of the cude
          speed={0.3} // speed of the particle
          count={40} // number of particles
        />
      </Center>
    </>
  );
}
