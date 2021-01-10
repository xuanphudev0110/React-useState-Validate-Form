import React from "react";
import { Tab, Container, Row, Col, Dropdown } from "react-bootstrap";
import hinh1 from "../Images/1.jpg";
import hinh2 from "../Images/2.jpg";
import hinh3 from "../Images/3.jpg";

export const dataInfo = [
  {
    id: 1,
    image: hinh1,
    title: "Làm Dev tại Hahalolo và Làm biếng ở Nhà",
    description: "Quá khứ: Halotimes và Teen1s"
  },
  {
    id: 2,
    image: hinh2,
    title: "Làm Dev tại Hahalolo và Làm biếng ở Nhà",
    description: "Quá khứ: Halotimes và Teen1s"
  },
  {
    id: 3,
    image: hinh3,
    title: "Làm Dev tại Hahalolo và Làm biếng ở Nhà",
    description: "Quá khứ: Halotimes và Teen1s"
  }
];

function Tab1() {
  return (
    <Tab.Pane eventKey="tab1">
      <Container>
        <Row>
          <Col lg={8} md={12}>
            {dataInfo.map((data, index) => {
              return (
                <div className="post post-row" key={data.id}>
                  <div className="post-img">
                    <img
                      className="img-responsive img-update"
                      alt="update"
                      src={data.image}
                    />
                  </div>
                  <div className="post-body">
                    <h6 className="post-title">{data.title}</h6>
                    <h6>{data.description}</h6>
                    <Dropdown>
                      <Dropdown.Toggle className="post-dot">
                        <i
                          className="fa fa-ellipsis-h"
                          aria-hidden="true"
                          id="dropdown-basic"
                        ></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Xóa</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sửa</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col lg={4} md={12} className="mobile-tab1">
            <div className="link-info">
              <i className="fa fa-mobile" aria-hidden="true"></i>
              1900 8198
            </div>
            <div className="link-info">
              <i className="fa fa-birthday-cake" aria-hidden="true"></i>
              01 tháng 10, 1999
            </div>
            <div className="link-info">
              <i className="fa fa-venus-mars" aria-hidden="true"></i>
              Nam
            </div>
            <div className="link-info">
              <a href="#">Sửa</a>
            </div>
          </Col>
        </Row>
      </Container>
    </Tab.Pane>
  );
}

export default Tab1;
