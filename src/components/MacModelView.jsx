import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three';
import Lights from './Lights';
import Loader from './Loader';
import MacBook from './MacBook';
import { Suspense } from "react";

const MacModelView = ({ controlRef, setRotationState, item }) => {
  return (
    <group>
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 5]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState && setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <Suspense fallback={<Loader />}>
        <MacBook
          scale={[0.7, 0.7, 0.7]}
          position={[0, -0.5, 0]}
          rotation={[0, 0, 0]}
          item={item}
        />
      </Suspense>
    </group>
  );
};

export default MacModelView; 