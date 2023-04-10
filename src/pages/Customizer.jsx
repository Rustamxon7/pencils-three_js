import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { ColorPicker, CustomButton, Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);

  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    num3: true,
    num6: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return (
          snap.colorPicker && (
            <ColorPicker colorType='color' tabTitle='Cover color' />
          )
        );
      case 'textcolorpicker':
        return (
          snap.colorPicker && (
            <ColorPicker colorType='textcolor' tabTitle='Text color' />
          )
        );
      default:
        break;
    }
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab, index) => (
                  <Tab
                    key={index}
                    tab={tab}
                    icon={tab.icon}
                    active={snap.activeEditorTab === tab.name}
                    handleClick={() => {
                      setActiveEditorTab(tab.name);
                      state.colorPicker = true;
                    }}
                    isActiveTab={activeEditorTab === tab.name}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}
          >
            <CustomButton
              type='filled'
              title='Go Back'
              handleClick={() => (state.intro = true)}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
          <motion.div
            className='filtertabs-container'
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab, index) => (
              <Tab
                key={index}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => {
                  setActiveFilterTab({ [tab.name]: true });
                  state.pencils = tab.name;
                }}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
