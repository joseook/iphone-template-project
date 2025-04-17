import React from 'react';
import { motion } from 'framer-motion';
import GamingPerfChart from '../components/GamingPerfChart';
import Model from '../components/Model';

const IPhonePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <Model showTitle={false} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">iPhone 15 Pro</h1>
            <p className="text-xl text-gray-400 mb-8">O poder do chip A17 Pro</p>
            <button
              onClick={() => document.getElementById('gaming').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Explorar
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gaming Performance Section */}
      <section id="gaming" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Performance de Gaming
          </motion.h2>
          <GamingPerfChart />
        </div>
      </section>

      {/* Camera Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Sistema de Câmera Pro
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4">Capture momentos com qualidade profissional</h3>
              <p className="text-gray-400 mb-6">
                Com o sistema de câmera tripla de 48MP, você pode capturar fotos com detalhes impressionantes e cores vibrantes, mesmo em condições de pouca luz.
              </p>
              <ul className="space-y-4">
                {[
                  'Câmera principal de 48MP com sensor quad-pixel',
                  'Teleobjetiva de 12MP com zoom óptico de 5x',
                  'Ultra-angular de 12MP com campo de visão de 120°',
                  'Modo Noturno avançado para fotos em ambientes escuros'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="aspect-square bg-blue-900 rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/images/hero.jpeg"
                alt="Camera"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Titanium Design Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/images/hero.jpeg"
            alt="Titanium background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Design em Titânio
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Resistente',
                description: 'O titânio grau aeroespacial oferece resistência incrível com um peso mínimo',
                icon: '💪'
              },
              {
                title: 'Leve',
                description: 'O iPhone 15 Pro é o mais leve da história da linha Pro',
                icon: '🪶'
              },
              {
                title: 'Sustentável',
                description: 'Fabricado com materiais reciclados e embalagem livre de plástico',
                icon: '♻️'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-2xl"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Recursos Principais
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'A17 Pro Chip',
                description: 'O chip mais poderoso já usado em um smartphone, com CPU até 10% mais rápida e GPU até 20% mais rápida',
                icon: '🚀'
              },
              {
                title: '120Hz ProMotion',
                description: 'Experiência fluida de gaming e rolagem com taxa de atualização que se ajusta de 10Hz a 120Hz',
                icon: '🎮'
              },
              {
                title: 'Ray Tracing',
                description: 'Gráficos de qualidade console com ray tracing acelerado por hardware para jogos imersivos',
                icon: '✨'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black p-6 rounded-xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Button Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-bold mb-4">Botão de Ação</h3>
              <p className="text-gray-400 mb-6">
                O novo botão de Ação personalizável permite acesso rápido às suas funções favoritas com apenas um toque.
              </p>
              <ul className="space-y-4">
                {[
                  'Abra a câmera instantaneamente',
                  'Inicie uma gravação de voz',
                  'Ligue a lanterna',
                  'Ative o modo não perturbe',
                  'Abra sua tradução favorita',
                  'Personalize com atalhos'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 md:order-2 aspect-square bg-gray-800 rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Conheça o futuro agora
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8"
          >
            O iPhone 15 Pro representa o auge da inovação em smartphones. Com desempenho inigualável, design elegante e recursos avançados, é a escolha perfeita para quem busca o melhor da tecnologia.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Comprar iPhone 15 Pro
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default IPhonePage;



