import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generaeteStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: 'white',
      };
    } else if (type === 'outlined') {
      return {
        backgroundColor: 'white',
        color: snap.color,
        border: `1px solid ${snap.color}`,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generaeteStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
