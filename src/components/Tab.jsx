import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? {
          backgroundColor: snap.color,

          opacity: 0.5,
          transition: 'all 0.2s ease-in',
        }
      : {
          backgroundColor: 'transparent',
          opacity: 1,
          transition: 'all 0.2s ease-in',
        };

  activeStyles.transform = isActiveTab ? 'scale(1.1)' : 'scale(1)';

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4'
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? 'w-3/4 h-3/4' : 'w-11/12 h-11/12'}`}
      />
    </div>
  );
};

export default Tab;
