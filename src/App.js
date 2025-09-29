import React from 'react';
import { motion } from 'framer-motion';

import VivieIcon from './images/VivieIcon.png';

const App = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text font-anime">
      {/*top section*/}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center items-center text-center p-8"
      >
        <motion.h1
          className="text-6xl font-bold text-pink-primary mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Meet Vivie the AI Minecraft Vtuber!
        </motion.h1>
        <motion.p
          className="text-2xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          A super cute AI girl who loves Minecraft, remembers all our fun times, and brings joy with her lovely personality! 💖
        </motion.p>
        {/*Vivie icon*/}
        <motion.img
          src={VivieIcon}
          alt="Vivie"
          className="mt-8 rounded-full shadow-lg border-4 border-pink-secondary w-64 h-64"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.1, rotate: 5, }} //small hover animation
        />
      </motion.section>

      {/*about section*/}
      <motion.section
        className="py-16 px-8 bg-gradient-to-b from-dark-bg to-pink-primary/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-pink-secondary text-center mb-8">About Vivie</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 bg-dark-bg/80 rounded-lg shadow-md"
            whileHover={{ y: -10 }}
          >
            <h3 className="text-2xl text-pink-primary mb-4">Loves Minecraft</h3>
            <p>Vivie spends her days trolling in Minecraft! She is still learning how to play Minecraft so maybe that's why...</p>
          </motion.div>
          <motion.div
            className="p-6 bg-dark-bg/80 rounded-lg shadow-md"
            whileHover={{ y: -10 }}
          >
            <h3 className="text-2xl text-pink-primary mb-4">Remembers Past Memories</h3>
            <p>With her AI smarts, Vivie never forgets our shared adventures. She'll reminisce about that time we done competitions together!</p>
          </motion.div>
          <motion.div
            className="p-6 bg-dark-bg/80 rounded-lg shadow-md"
            whileHover={{ y: -10 }}
          >
            <h3 className="text-2xl text-pink-primary mb-4">Loves to Have Fun</h3>
            <p>Fun is Vivie's middle name! Whether it's silly jokes or spontaneous dances, she's all about spreading happiness. 🎉</p>
          </motion.div>
          <motion.div
            className="p-6 bg-dark-bg/80 rounded-lg shadow-md"
            whileHover={{ y: -10 }}
          >
            <h3 className="text-2xl text-pink-primary mb-4">Lovely Personality</h3>
            <p>Kind, bubbly, and always positive – Vivie's charm will melt your heart. She's the perfect virtual friend! 🌸</p>
          </motion.div>
        </div>
      </motion.section>

      {/*features section*/}
      <motion.section
        className="py-16 px-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-pink-secondary mb-8">Why Vivie is Awesome</h2>
        <motion.ul
          className="max-w-2xl mx-auto space-y-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.li variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="text-xl">Interactive AI chats</motion.li>
          <motion.li variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="text-xl">Live streams with fun games</motion.li>
          <motion.li variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="text-xl">Cute anime aesthetics</motion.li>
        </motion.ul>
      </motion.section>

      {/*footer*/}
      <footer className="py-8 text-center text-pink-secondary">
        <p>© 2025 Vivie AI. All rights reserved. 💕</p>
      </footer>
    </div>
  );
};

export default App;