import React from "react";
import { Tab } from "react-bootstrap";

export const dataEventLiffe = [
  {
    id: 1,
    year: 2016,
    title1: "Bắt đầu công việc mới tại Mạng xã hội du lịch Việt Nam",
    title2: "Tốt nghiệp Đại học Khoa học Huế"
  },
  {
    id: 2,
    year: 2012,
    title1: "Con nít, người lớn ♥",
    title2: "Con nít, người lớn ♥"
  },
  {
    id: 3,
    year: 2011,
    title1: "Bắt đầu công việc mới tại Đội Ctxh Đhkh Huế",
    title2: "Bắt đầu học tại Đại học Khoa học Huế"
  }
];

function Tab7() {
  const alertEvents = () => {
    alert("Chưa có layout");
  };
  return (
    <Tab.Pane eventKey="tab7">
      <div className="work-tab2">Sự kiện trong đời</div>
      <div className="add-work" onClick={alertEvents}>
        <i className="fa fa-plus" aria-hidden="true"></i> Thêm một sự kiện trong
        đời
      </div>
      <table className="table table-event-life">
        <tbody>
          {dataEventLiffe.map((data, index) => {
            return (
              <tr key={data.id}>
                <td>{data.year}</td>
                <td>
                  <ul className="ul-events">
                    <li>
                      <i className="fa fa-flag"></i>
                      {data.title1}
                    </li>
                    <li>
                      <i className="fa fa-flag"></i>
                      {data.title2}
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Tab.Pane>
  );
}

export default Tab7;
