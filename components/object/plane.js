const Plane = () => {
  return (
    <mesh rotation={[-1.57079632679, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="rgba(67,67,84,1)" />
    </mesh>
  );
};

export default Plane;
