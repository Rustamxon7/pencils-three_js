import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute right-full mr-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha={true}
        presetColors={[
          '#000000',
          '#ffffff',
          '#ff0000',
          '#00ff00',
          '#0000ff',
          '#ffff00',
          '#00ffff',
          '#ff00ff',
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
