import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';

import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  const [loaded, setLoaded] = useState(false);

  const loadCustomizer = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  };

  window.addEventListener('load', loadCustomizer)
  setTimeout(() => {
    setLoaded(true);
  }, 1500);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src='./threejs.png'
              alt='threejs'
              className='w-8 h-8 object-contain'
            />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                ELEVATE
                <br />
                YOUR
                <br />
                WRITING
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Experience <b>precision and comfort</b> with our{' '}
                <b>premium pencils</b>. Designed for <b>effortless writing</b>.
                Get yours with our <b>exclusive premium box</b>.
              </p>

              {loaded ? (
                <CustomButton
                  type='filled'
                  title='Customize It'
                  handleClick={() => (state.intro = false)}
                  customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                />
              ) : (
                <span className='w-fit px-4 py-2.5 font-bold text-sm text-gray-400'>
                  Loading...
                </span>
              )}
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
