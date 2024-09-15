// PortalMaterial.js
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei"; // Use this if you're using @react-three/drei
import { extend } from "@react-three/fiber";
import { vertexShader, fragmentShader } from "./Shaders";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#0xffffff"),
    uColorEnd: new THREE.Color("#0x000000"),
  },
  vertexShader,
  fragmentShader
);

extend({ PortalMaterial });

export default PortalMaterial;
