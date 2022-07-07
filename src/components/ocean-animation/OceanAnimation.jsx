import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Water } from "three-stdlib";
import Texture from "../../assets/images/water.jpeg";
import { DoubleSide } from "three";

extend({ Water });

const OceanAnimation = () => {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, Texture);
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 500,
      waterNormals,
      sunColor: "white",
      waterColor: "#B7F0F4",

      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (
      (ref.current.material.uniforms.time.value += delta),
      (ref.current.position.y = -5),
      (ref.current.position.z = 5)
    )
  );
  return (
    <water
      ref={ref}
      args={[geom, config]}
      side={DoubleSide}
      rotation-x={-Math.PI / 2}
    />
  );
};

export default OceanAnimation;
