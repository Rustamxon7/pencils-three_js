import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import state from '../store';

const ColorPicker = ({ colorType, tabTitle }) => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <div className='colorpicker-container flex justify-between items-center px-2'>
        <p className='text-center'>{tabTitle}</p>

        <AiOutlineCloseCircle onClick={() => (state.colorPicker = false)} />
      </div>

      <SketchPicker
        color={colorType === 'color' ? snap.color : snap.textcolor}
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
        onChange={
          colorType === 'color'
            ? (color) => (state.color = color.hex)
            : (color) => (state.textcolor = color.hex)
        }
      />
    </div>
  );
};

export default ColorPicker;
