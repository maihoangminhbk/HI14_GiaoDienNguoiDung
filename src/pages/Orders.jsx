import React, { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { checkTaskData, contextMenuItems, checkTaskGrid } from '../data/dummy';
import { Header } from '../components';
import './Order.css';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const [show, setShow] = useState(false);
  function getLastWork() {
    let notComplete = checkTaskData.filter((task)=> task.Status == 'Không Hoàn thành')
    return notComplete[0]
  }
  const lastWork = getLastWork()
  return (
    <div className='time-keeping'>
      <div className="work-card">
        <div className='work-img'>
            <img src={lastWork.ProductImage} alt="work-img" style={{height: '200px',width: '90%'}} />
        </div>
        <div className='work-info'>
          <p> Công việc: {lastWork.OrderItems}</p>
          <p> ID công việc: {lastWork.OrderID}</p>
          <p> Vị trí: {lastWork.Location}</p>
          <p> Thời gian giao việc: {lastWork.TotalAmount}</p>
          <p> Trạng thái: {lastWork.Status}</p>          
        </div>
      </div>
      <button className='showAll' onClick={()=>setShow(!show)}>{show ?  'Ẩn tất cả' : 'Xem tất cả'}</button>
      {show && <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Danh sách" title="Công việc được giao" />
        <GridComponent
          id="gridcomp"
          dataSource={checkTaskData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          editSettings={editing}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {checkTaskGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
        </GridComponent>
      </div>}
    </div>
  );
};
export default Orders;
