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
