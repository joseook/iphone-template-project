# Apple Website Clone

Um clone interativo do site da Apple mostrando iPhones e MacBooks com modelos 3D interativos, inspirado no tutorial do JavaScript Mastery e expandido com recursos adicionais e múltiplas páginas.

![Apple Website Clone](/assets/images/hero.jpeg)

## ✨ Recursos

- **Modelo 3D interativo do iPhone 15 Pro** com personalização de cores
- **Modelo 3D básico do MacBook** usando geometria primitiva (pode ser substituído por um modelo real)
- **Página de loja completa** com catálogo de produtos, customização, experiência AR e carrinho de compras
- **Componente de comparação de produtos** para visualizar diferenças entre modelos de iPhone
- **Gráficos de desempenho** mostrando estatísticas de jogos e comparações com concorrentes
- **Múltiplas páginas** incluindo iPhone, MacBook e Loja
- **Design responsivo** para diferentes tamanhos de tela
- **Animações suaves** usando GSAP e Framer Motion
- **Interface moderna** inspirada no design minimalista da Apple

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [Vite](https://vitejs.dev/) - Build tool e servidor de desenvolvimento
- [Three.js](https://threejs.org/) - Biblioteca 3D para web
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - Renderer React para Three.js
- [GSAP](https://greensock.com/gsap/) - Biblioteca de animação
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animação para React
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitário
- [react-chartjs-2](https://react-chartjs-2.js.org/) - Componentes React para Chart.js
- [Heroicons](https://heroicons.com/) - Ícones SVG

## 🚀 Começando

### Pré-requisitos

- Node.js (recomendado v14+)
- pnpm (ou npm/yarn)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/joseook/apple-website-clone.git
   cd apple-website-clone
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Build para produção
```bash
pnpm build
```

## 📂 Estrutura do Projeto

```
/src
  /components         # Componentes reutilizáveis
    /IPhone.jsx       # Modelo 3D do iPhone
    /MacBook.jsx      # Modelo 3D do MacBook
    /Model.jsx        # Wrapper para modelos 3D
    /ModelView.jsx    # Viewport para modelos iPhone
    /MacModelView.jsx # Viewport para modelos MacBook
    /Lights.jsx       # Luzes para cenas 3D
    /ProductCustomizer.jsx # Customizador de produtos
    /ARViewer.jsx     # Visualizador AR
    /GamingPerfChart.jsx # Gráficos de desempenho
    /ProductComparison.jsx # Comparação de produtos
    /Chatbot.jsx      # Assistente de compra
  /pages
    /HomePage.jsx     # Página inicial
    /IPhonePage.jsx   # Página do iPhone
    /MacPage.jsx      # Página do MacBook
    /StorePage.jsx    # Página da loja
  /constants          # Constantes e dados
  /services           # Serviços e APIs
  /utils              # Funções utilitárias
  /App.jsx            # Componente principal
  /index.css          # Estilos globais
/public
  /models             # Modelos 3D GLB
  /assets
    /images           # Imagens e texturas
```

## 🌐 Modelos 3D

### iPhone
O modelo 3D do iPhone é carregado a partir de um arquivo GLB (`/public/models/scene.glb`).

### MacBook
Atualmente, o MacBook é renderizado usando geometria primitiva. Para usar um modelo 3D real:

1. Adquira ou crie um modelo 3D de MacBook em formato GLB
2. Coloque o arquivo em `/public/models/macbook.glb`
3. Atualize o componente `MacBook.jsx` para carregar e renderizar o modelo:

```jsx
// Em MacBook.jsx
import { useGLTF } from '@react-three/drei';

export default function MacBook(props) {
  const { nodes, materials } = useGLTF('/models/macbook.glb');
  
  useEffect(() => {
    // Código para alternar cores
    // ...
  }, [props.item.color]);

  return (
    <group {...props} dispose={null}>
      {/* Referencie os nós e materiais do modelo 3D */}
      <mesh geometry={nodes.Body.geometry} material={materials.Body} />
      <mesh geometry={nodes.Screen.geometry} material={materials.Screen} />
      {/* ... */}
    </group>
  );
}
```

## 🔍 Recursos Adicionados ao Tutorial Original

- Página completa do MacBook com modelo 3D interativo
- Página de loja com múltiplos produtos e categorias
- Sistema de carrinho de compras funcional
- Componente de comparação de produtos interativo
- Gráficos de desempenho de jogos com comparações
- Experiência AR aprimorada
- Seções adicionais para especificações e recursos
- Design responsivo e melhor experiência do usuário
- Conteúdo adicional sobre recursos do iPhone e MacBook

## 🔍 Recursos para Modelos 3D

Aqui estão alguns lugares onde você pode encontrar modelos 3D para uso em seus projetos:

- [Sketchfab](https://sketchfab.com/) - Muitos modelos gratuitos e pagos
- [TurboSquid](https://www.turbosquid.com/) - Modelos 3D de alta qualidade
- [Free3D](https://free3d.com/) - Modelos 3D gratuitos
- [Blender](https://www.blender.org/) - Software gratuito para criar seus próprios modelos

## 📝 Créditos

Este projeto foi inspirado pelo tutorial do [JavaScript Mastery](https://www.jsmastery.pro/) e expandido com recursos adicionais, páginas e melhorias na interface do usuário.

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
