import React from 'react';

const GradientText = ({ children, dir, from, to }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(${dir === 'left-to-right' ? '90deg' : '270deg'}, ${from}, ${to})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  };

  return <span style={gradientStyle}>{children}</span>;
};

export default GradientText;