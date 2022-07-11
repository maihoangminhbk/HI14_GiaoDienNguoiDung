
import { MdOutlineCancel } from 'react-icons/md';
import React, { useEffect } from 'react';
import { RiNewspaperLine, RiPagesLine } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../contexts/ContextProvider';
import {InputReport} from '.';

const NavButton = ({ title, customFunc, icon, color }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {icon}
    </button>
  </TooltipComponent>
);

const CreateReport = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1024) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);


  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div className="flex">
      <NavButton title="Tạo báo cáo"  customFunc={() => handleClick('inputReport')} color={currentColor} icon={<RiPagesLine />}/>
      {isClicked.inputReport && <InputReport />}
      </div>
    </div>

  );
};

export default CreateReport;
