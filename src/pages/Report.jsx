import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { reportsData, reportsGrid } from '../data/dummy';
import { Header, CreateReport } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Danh sách" title="Báo cáo" />
      {<div>
      <p>Thêm báo cáo: <CreateReport /> </p>
      </div>}
      <GridComponent
        dataSource={reportsData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {reportsGrid.map((item, index) => {
            if (item.field !== 'EmployeeKPI') {
              return <ColumnDirective key={index} {...item} />;
            }
          })}

        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
