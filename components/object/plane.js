const Plane = () => {
  return (
    <mesh rotation={[-1.57079632679, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="red" />
    </mesh>
  );
};

export default Plane;
