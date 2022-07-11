import React from 'react';
import Select from 'react-select'
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { employeesData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Tab } from 'react-bootstrap';
import { itemsToOrder } from '@syncfusion/ej2/treemap';
import '../App.css';

const InputReport = () => {
  const { currentColor } = useStateContext();
  const nhanvien = [
    {  label: 'Hoàng Trung Phong' },
    {  label: 'Vũ Văn Long' },
    {  label: 'Trần Hoàng Việt' },
    {  label: 'Phùng Xuân Quân' },
  ]
  return (
    <div className=" md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <p className="font-semibold text-lg dark:text-gray-200">Tạo báo cáo</p>
        <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
      </div>
      <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
    </div>
    <div className="mt-5">
          <div className="group">
            <label>Quản lý: </label>
            <Select options= {nhanvien} />
          </div>
          <div className="group mt-3">
            <label>Công việc:</label>
            <input type="text" className="input" /><p/>
          </div>
          {/* <div className="group">
            <label>Ảnh: </label>
            <input type="file" className="input"/><p/>
          </div> */}
          <div className="group">
            <label>Vị trí: </label>
            <input type="text" className="input" /><p/>
          </div>
          <div className="group">
            <label>Nội dung: </label>
            <input type="text" className="input" /><p/>
          </div>
          
      <div className="mt-5">
        <Button color="white" bgColor={currentColor} text="Xác nhận" borderRadius="10px" width="full" />
      </div>
    </div>
  </div>
  );
};

export default InputReport;
