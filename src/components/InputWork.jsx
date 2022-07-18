import React from 'react';
import Select from 'react-select'
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { employeesData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Tab } from 'react-bootstrap';
import { itemsToOrder } from '@syncfusion/ej2/treemap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputWork = () => {
  const { currentColor } = useStateContext();
  const nhanvien = [
    { label: 'Nguyễn Văn Toàn', value: 'Nguyễn Văn Toàn' },
    { label: 'Nguyễn Công Phượng', value: 'Nguyễn Công Phượng' },
    { label: 'Nguyễn Phong Hồng Duy', value: 'Nguyễn Phong Hồng Duy' },
    { label: 'Trần Minh Vương', value: 'Trần Minh Vương' },
    { label: 'Nguyễn Quang Hải', value: 'Nguyễn Quang Hải' },
    { label: 'Vũ Văn Thanh', value: 'Vũ Văn Thanh' },
    { label: 'Đoàn Văn Hậu', value: 'Đoàn Văn Hậu' }
  ]

  const handleClick = () => {
    toast.success('Tạo công việc thành công!', { position: toast.POSITION.BOTTOM_RIGHT });
  }

  return (
    <div className=" md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <ToastContainer />
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Tạo công việc</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
        </div>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>
      <div className="mt-5 ">
        <div className="group">
          <label>Công việc:</label>
          <input type="text" className="input" /><p />
        </div>
        <div className="group">
          <label>Ảnh: </label>
          <input type="file" className="" /><p />
        </div>
        <div className="group">
          <label>Thời gian: </label>
          <input type="text" className="input" /><p />
        </div>
        <div className="group">
          <label>Vị trí: </label>
          <input type="text" className="input" /><p />
        </div>
        <div className="group">
          <label>Nhân viên: </label>
          {/*<select>
            {employeesData?.map((item, index) => (
            <option value="grapefruit"> {item.Name}</option>
            
            ))}
            </select>*/}
          <Select isMulti options={nhanvien} />
        </div>
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="Xác nhận" onClick={handleClick} borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
};

export default InputWork;
