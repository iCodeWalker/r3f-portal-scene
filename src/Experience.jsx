import {
  Center,
  useTexture,
  useGLTF,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";

export default function Experience() {
  //   const model = useGLTF("./model/portal.glb");
  const { nodes } = useGLTF("./model/portal.glb");
  //   console.log(nodes);

  // Load texture using useTexture helper
  const bakedTexture = useTexture("./model/baked.jpg");
  // fliping y cordinate of the texture
  bakedTexture.flipY = false;
  //   console.log(bakedTexture)

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
          <meshBasicMaterial color="ffffee" />
        </mesh>

        {/* Pole light B mesh */}
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
        >
          <meshBasicMaterial color="ffffee" />
        </mesh>

        {/* Prtal light mesh */}
        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          <meshBasicMaterial color="ffffee" />
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
