import React, { useRef, useState } from "react";

function MyObject(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1, 1, 1] : [1.5, 1.5, 1.5]}
      // onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial
        attach="material"
        color={hovered ? "rgb(175,5,85)" : "rgb(85,85,85)"}
      />
    </mesh>
  );
}

export default MyObject;
