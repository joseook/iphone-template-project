# Apple Website Clone

An interactive Apple website clone showcasing iPhones and MacBooks with 3D models, inspired by JavaScript Mastery tutorial and expanded with additional features and multiple pages.

![Apple Website Clone](/assets/images/hero.jpeg)

## ✨ Features

- **Interactive 3D iPhone 15 Pro model** with color customization
- **Basic 3D MacBook model** using primitive geometry (can be replaced with a real model)
- **Complete store page** with product catalog, customization options, AR experience, and shopping cart
- **Product comparison component** for visualizing differences between iPhone models
- **Performance charts** showing gaming statistics and competitor comparisons
- **Multiple pages** including iPhone, MacBook, and Store
- **Responsive design** for different screen sizes
- **Smooth animations** using GSAP and Framer Motion
- **Modern interface** inspired by Apple's minimalist design
- **AR viewer** for enhanced product visualization
- **Shopping cart** with dynamic updates and product management

## 🛠️ Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Three.js](https://threejs.org/) - JavaScript 3D library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- [GSAP](https://greensock.com/gsap/) - Professional-grade animation library
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/) - Flexible JavaScript charting
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [React Router](https://reactrouter.com/) - Declarative routing for React

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/joseook/apple-website-clone.git
   cd apple-website-clone
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Production Build
```bash
pnpm build
```

## 📂 Project Structure

```
/src
  /components         # Reusable components
    /IPhone.jsx       # iPhone 3D model
    /MacBook.jsx      # MacBook 3D model
    /Model.jsx        # Wrapper for 3D models
    /ModelView.jsx    # Viewport for iPhone models
    /MacModelView.jsx # Viewport for MacBook models
    /Lights.jsx       # Lights for 3D scenes
    /ProductCustomizer.jsx # Product customizer
    /ARViewer.jsx     # AR experience viewer
    /GamingPerfChart.jsx # Gaming performance charts
    /ProductComparison.jsx # Product comparison tool
    /Chatbot.jsx      # Shopping assistant
    /ShoppingCart.jsx # Shopping cart sidebar
    /NavBar.jsx       # Navigation bar
    /Footer.jsx       # Footer component
  /pages
    /HomePage.jsx     # Home page
    /IPhonePage.jsx   # iPhone page
    /MacPage.jsx      # MacBook page
    /StorePage.jsx    # Store page
  /constants          # Constants and data
  /services           # Services and APIs
  /utils              # Utility functions
  /hooks              # Custom React hooks
  /context            # React context providers
  /App.jsx            # Main component
  /index.css          # Global styles
/public
  /models             # 3D GLB models
  /assets
    /images           # Images and textures
    /fonts            # Custom fonts
```

## 🔧 Advanced Customization

### Configuring 3D Models

#### iPhone
The iPhone 3D model is loaded from a GLB file (`/public/models/scene.glb`). The model supports color customization through material manipulation.

#### MacBook
Currently, the MacBook is rendered using primitive geometry. To use a real 3D model:

1. Acquire or create a MacBook 3D model in GLB format
2. Place the file in `/public/models/macbook.glb`
3. Update the `MacBook.jsx` component to load and render the model:

```jsx
// In MacBook.jsx
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export default function MacBook(props) {
  const { nodes, materials } = useGLTF('/models/macbook.glb');
  
  useEffect(() => {
    // Code to toggle colors
    // ...
  }, [props.item.color]);

  return (
    <group {...props} dispose={null}>
      {/* Reference the nodes and materials from the 3D model */}
      <mesh geometry={nodes.Body.geometry} material={materials.Body} />
      <mesh geometry={nodes.Screen.geometry} material={materials.Screen} />
      {/* ... */}
    </group>
  );
}

// Preload the model for better performance
useGLTF.preload('/models/macbook.glb');
```

### Performance Optimization

For better performance:

1. Use compressed textures where possible
2. Optimize 3D models by reducing polygon count
3. Implement lazy loading for components and assets
4. Use React.memo for components that don't need frequent re-renders
5. Implement code splitting with React.lazy and Suspense

## 🌟 Features Added Beyond the Original Tutorial

- Complete MacBook page with interactive 3D model
- Enhanced Store page with multiple products and categories
- Functional shopping cart system with persistent state
- Interactive product comparison component with detailed specifications
- Gaming performance charts with competitor comparisons
- Enhanced AR experience with more interactive elements
- Additional sections for specifications and features
- Responsive design and improved user experience
- Additional content about iPhone and MacBook features
- Animated transitions between pages
- Dark mode support

## 🔍 Resources for 3D Models

Here are some places where you can find 3D models for your projects:

- [Sketchfab](https://sketchfab.com/) - Many free and paid models
- [TurboSquid](https://www.turbosquid.com/) - High-quality 3D models
- [Free3D](https://free3d.com/) - Free 3D models
- [Blender](https://www.blender.org/) - Free software to create your own models
- [CGTrader](https://www.cgtrader.com/) - 3D model marketplace
- [Poly Haven](https://polyhaven.com/) - Free PBR materials and HDRIs

## 📱 Compatibility

This application is optimized for:

- Modern desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers on iOS and Android
- Tablet devices

WebGL support is required for 3D model rendering.

## 📝 Credits

This project was inspired by the [JavaScript Mastery](https://www.jsmastery.pro/) tutorial and expanded with additional features, pages, and UI improvements.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
