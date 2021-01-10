import React from "react";
import Nav from "react-bootstrap/Nav";

export const tabData = [
  {
    id: 1,
    name: "Tổng quan",
    KeyEvent: "tab1"
  },
  {
    id: 2,
    name: "Công việc và học vấn",
    KeyEvent: "tab2"
  },
  {
    id: 3,
    name: "Nơi từng sống",
    KeyEvent: "tab3"
  },
  {
    id: 4,
    name: "Thông tin liên hệ và cơ bản",
    KeyEvent: "tab4"
  },
  {
    id: 5,
    name: "Gia đình và các mối quan hệ",
    KeyEvent: "tab5"
  },
  {
    id: 6,
    name: "Chi tiết về bạn",
    KeyEvent: "tab6"
  },
  {
    id: 7,
    name: "Sự kiện trong đời",
    KeyEvent: "tab7"
  }
];

function TabComponent() {
  return (
    <Nav variant="pills" className="flex-column">
      {tabData.map((data1, index) => {
        return (
          <Nav.Item key={data1.id}>
            <Nav.Link eventKey={data1.KeyEvent}>{data1.name}</Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default TabComponent;
