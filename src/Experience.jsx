import { Center, useTexture, useGLTF, OrbitControls } from "@react-three/drei";

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
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Center>
    </>
  );
}
