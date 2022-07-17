/** @format */

import React, { useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import {
  ordersData,
  contextMenuItems,
  ordersGrid,
} from "../data/dummy";
import { Header } from "../components";
import { Button } from "react-bootstrap";
import { CreateWork, CreateReport } from "../components";
import Modal from "@material-ui/core/Modal";
const TasksCreate = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const editing = {
    allowDeleting: true,
    allowEditing: true,
  };
  const handleCLickWork = (e) => {
    const ran = Math.floor(Math.random() * 3);
    setModalData(ModalData[ran]);
    setIsOpenModal(true);
  };
  const ModalData = [
    {
      status: "Trong Tiến Trình",
      data: [
        { name: "Mai Hoàng Minh", time: "3h ngày 22/07" },
        { name: "Hoàng Ngọc Bảo", time: "6h ngày 21/07" },
      ],
    },
    {
      status: "Hoàn Thành",
      data: [
        { name: "Trần Xuân Trường", time: "5h ngày 15/07" },
        { name: "Trần Bảo Ngọc", time: "3h ngày 17/07" },
      ],
    },
    {
      status: "Đã Giao",
      data: [
        {
          name: "Nguyễn Thuận Thiên",
          time: "10h ngày 20/07",
        },
        { name: "Mai Hoàng Minh", time: "7h ngày 17/07" },
      ],
    },
  ];
  const contentStyle = {
    display: "flex",
    alignItem: "center",
    width: "100%",
    marginBottom: "20px",
  };
  const contentLabelStyle = {
    width: "100px",
    textAlign: "left",
    fontWeight: "bold",
    marginRight: "5px",
  };
  const gridStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "40% 70%",
    boxSizing: "border-box",
    padding: "10px",
  };
  const [modalData, setModalData] = useState({
    status: "Đang Tiến Hành",
    data: [
      { name: "Trần Xuân Trường", time: "5h ngày 15/07" },
      { name: "Trần Bảo Ngọc", time: "3h ngày 17/07" },
    ],
  });
  // const [showAll, setShowAll] = useState(false);
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        category='Danh sách'
        title='Công việc đã tạo'
      />
      {
        <div>
          <p>
            Thêm công việc: <CreateWork />{" "}
          </p>
        </div>
      }
      {
        <div>
          <p>
            Thêm báo cáo: <CreateReport />{" "}
          </p>
        </div>
      }
      <button
        style={{
          width: "130px",
          height: "40px",
          fontWeight: "bold",
          background: "#2f38b2",
          border: "none",
          cursor: "pointer",
          borderRadius: "7px",
          margin: "10px 0",
          color: "#ffffff",
        }}
        onClick={() => {
          setIsEdit(!isEdit);
        }}>
        {isEdit ? "Xác nhận" : "Sửa công việc"}
      </button>
      {isEdit === false ? (
        <div onClick={handleCLickWork}>
          <GridComponent
            id='gridcomp'
            dataSource={ordersData}
            allowPaging
            allowSorting
            allowExcelExport
            allowPdfExport
            contextMenuItems={contextMenuItems}
            editSettings={editing}>
            <ColumnsDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {ordersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject
              services={[
                Resize,
                Sort,
                ContextMenu,
                Filter,
                Page,
                ExcelExport,
                Edit,
                PdfExport,
              ]}
            />
          </GridComponent>
        </div>
      ) : (
        <GridComponent
          id='gridcomp'
          dataSource={ordersData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          editSettings={editing}>
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {ordersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
            ]}
          />
        </GridComponent>
      )}
      <Modal
        open={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
        }}>
        <div
          style={{
            position: "absolute",
            top: "150px",
            width: "35%",
            left: "50%",
            transform: "translate(-50%,0)",
            border: "1px solid #aaaaaa",
            fontSize: "18px",
            background: "#ffffff",
            padding: "20px 40px",
            textAlign: "center",
          }}>
          <h2 style={{ marginBottom: "30px" }}>
            Thông tin chấm công
          </h2>
          <div style={contentStyle}>
            <div style={contentLabelStyle}>
              Trạng thái:{" "}
            </div>
            <span>{modalData.status}</span>
          </div>
          <div style={{
            width: '100%',
            border: '1px solid #888888'
          }}>
            <div style={gridStyle}>
              <div>Công nhân</div>
              <div>Thời gian làm</div>
            </div>
            {modalData.data.map((data, index) => {
              return (
                <div key={index} style={gridStyle}>
                  <div>{data.name}</div>
                  <div>{data.time}</div>
                </div>
              );
            })}
          </div>
          
          <button
            onClick={() => setIsOpenModal(false)}
            style={{
              width: "130px",
              height: "40px",
              fontWeight: "bold",
              background: "#2c9b69",
              border: "none",
              cursor: "pointer",
              borderRadius: "7px",
              margin: "10px 0",
              color: "#ffffff",
            }}>
            Thoát
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default TasksCreate;
