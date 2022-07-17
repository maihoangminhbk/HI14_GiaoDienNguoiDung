import React, { useEffect } from 'react';
import { useLayoutEffect } from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, onClick }) => {
  const { setIsClicked, initialState } = useStateContext();

  const handleClick = () => {
    onClick();
  }

  return (
    <button
      type="button"
      onClick={() => onClick ? handleClick() : setIsClicked(initialState)}
      // onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
