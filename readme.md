## Portals

    {/* Setting background color */}
    <color args={["#030202"]} attach="background" />

    The model is composed of multiple parts
    1. The baked model to which we need to apply a meshBasicMaterial with the baked texture.
    2. Two pole lights Meshes to which we need to apply a meshBasicMaterial.
    3. The portal to which we need to apply a ShaderMaterial.

    We are not going to add the whole model at once to the scene, instead we are going to add each element separately in order to have more control over them.

    And these elements are avialable in the "nodes" property of the model.

    The baked model node is named baked and we can now access it with "nodes.baked".

    We are not going to use <primitive /> because we want to apply our own material to the Mesh. But we do need the geometry.
    So,  create a mesh and set it's geometry to nodes.baked.geometry

    We are going to add our own material, but first we need to load the texture, we can use the useTexture helper from drei.

    We can add the texture using map property, but we need to flip the y coordinate of the texture.
    Since the texture is returned immediately when calling useTexture, we can directly flip it with the flipY property.

    can also do this
    <meshBasicMaterial map={bakedTexture} map-flipY={false}/>

    Centering :

    Move the scene down with the Center helper from drei.

    Adding Pole light :

    Inside <Center> add a new <mesh> with the geometry set to the nodes.poleLightA.geometry.

    Tone mapping :

    Tone mapping is usually good and color looks better with it, but if our scene is baked and we don't want to have extra tone mapping, because the while baking the scene we have already did it, so we can easily stop the defautlt tone mapping by adding "flat" attribute to the <Canvas>

    The flat will set the toneMapping to THREE.NoToneMapping


    Sparkles in drei :
        <Sparkles
          size={6} // size of the particles
          scale={[4, 2, 4]} // area of the cude inside which sparkles are kept
          position-y={1} // postion of the cude
          speed={0.3} // speed of the particle
          count={40} // number of particles
        />

    Portal :

    We need to add the custom shader material to the portal.

      1. Replace the <meshBasicMaterial> with <shaderMaterial>.
      2. import the shaders.
      3. Use
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              uTime: { value: 0 },
              uColorStart: { value: new THREE.Color("#ffffff") },
              uColorEnd: { value: new THREE.Color("#000000") },
            }}
          />
      4. For accessing shader in JSX file we use fetch api to call the shaders.
      5. The shaders file should be kept in public folder if we want to access it using fetch api and not using the vite or web pack config.
      6. This will cost us an extra API call that can be fatal and is unnecessary.

      7. If we want to use vite.config for loading the shader we have to move our index.html(root) inside the src to avoid conflicts from the vite nomenclature.
