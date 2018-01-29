import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };
  const gameHeight = 1200;
  return (
    <rect
      style={skyStyle}
      x={skyAndGroundWidth / -2}
      y={100 - gameHeight}
      width={skyAndGroundWidth}
      height={gameHeight}
    />
  );
};

export default Sky;
