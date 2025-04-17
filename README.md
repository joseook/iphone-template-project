# Apple Website Clone

This project is a clone of the Apple website showcasing iPhone and MacBook products with interactive 3D models.

## Features

- Interactive 3D iPhone model showcase with color customization
- Basic 3D MacBook model with geometry primitives (to be replaced with a real model)
- Responsive design
- Animation effects using GSAP and Framer Motion
- Built with React, Vite, and Three.js

## Technology Stack

- React
- Vite
- Three.js with React Three Fiber
- GSAP for animations
- Framer Motion
- TailwindCSS

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

- `/src/components` - Reusable UI components, including 3D models
- `/src/pages` - Page components for different sections
- `/src/constants` - Constants and configuration
- `/src/services` - API services
- `/src/utils` - Utility functions
- `/public/models` - 3D model files

## 3D Models

### iPhone Model
The iPhone model is loaded from a GLB file located at `/public/models/scene.glb`. 

### MacBook Model
The MacBook is currently rendered using basic Three.js primitives. To replace it with a realistic 3D model:

1. Find or create a MacBook 3D model in GLB format
2. Place the model file in `/public/models/macbook.glb`
3. Update the `MacBook.jsx` component:
   - Uncomment the `useGLTF` call and preload function
   - Replace the primitive geometry with references to the loaded model's nodes and materials

#### Example implementation with GLB model:

```jsx
function MacBook(props) {
  const { nodes, materials } = useGLTF("/models/macbook.glb");
  
  // Apply color changes to materials as needed
  useEffect(() => {
    if (materials) {
      // Update materials that should change color
      // Example: materials.body.color = new THREE.Color(props.item.color[0]);
      Object.values(materials).forEach(material => {
        material.needsUpdate = true;
      });
    }
  }, [materials, props.item]);
  
  return (
    <group {...props} dispose={null}>
      {/* Replace with actual model parts */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials.base}
      />
      {/* Add other mesh components as needed */}
    </group>
  );
}

useGLTF.preload("/models/macbook.glb");
```

## Resources for 3D Models

- [Sketchfab](https://sketchfab.com/) - Browse or purchase 3D models
- [TurboSquid](https://www.turbosquid.com/) - 3D model marketplace
- [Free3D](https://free3d.com/) - Free 3D models
- [Blender](https://www.blender.org/) - Create and edit 3D models

## License

MIT
