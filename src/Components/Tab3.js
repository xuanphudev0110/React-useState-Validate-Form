import React from "react";
import {
  Tab,
  Row,
  Col,
  Dropdown,
  OverlayTrigger,
  Button,
  Tooltip,
  Form
} from "react-bootstrap";
import hinh4 from "../Images/sydney.jpg";
import hinh5 from "../Images/thailand.jpg";

export const dataCity = [
  {
    id: 1,
    image: hinh4,
    title: "Ho Chi Minh City, Vietnam",
    description: "Tỉnh/Thành phố hiện tại"
  },
  {
    id: 2,
    image: hinh5,
    title: "Hue, Vietnam",
    description: "Quê quán"
  }
];

function Tab3() {
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const changeOpen3 = () => {
    setOpen3(!open3);
  };
  const changeOpen4 = () => {
    setOpen4(!open4);
  };
  return (
    <Tab.Pane eventKey="tab3">
      <div className="work-tab2">THÀNH PHỐ HIỆN TẠI VÀ QUÊ HƯƠNG</div>
      <div className="add-city">
        {open3 === false && (
          <div className="add-work" onClick={changeOpen3}>
            <i className="fa fa-plus" aria-hidden="true"></i> Thêm thành phố
            hiện tại
          </div>
        )}
        {open3 === true && (
          <div className="description-work">
            <Form>
              <Form.Group>
                <Row>
                  <Col lg={3} className="float-form-rs">
                    <Form.Label>Thành phố hiện tại</Form.Label>
                  </Col>
                  <Col lg={9}>
                    <Form.Control type="email" placeholder="Nhập địa điểm" />
                  </Col>
                </Row>
                <div className="flex-btn">
                  <Dropdown>
                    <Dropdown.Toggle className="post-dot triangle-dropdown">
                      <i
                        className="fa fa-globe"
                        aria-hidden="true"
                        id="dropdown-basic"
                      ></i>
                      <span>Công Khai</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu3">
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-globe"></i>Công khai
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-users"></i>Bạn của bạn bè
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-user-plus"></i>Bạn bè
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-user-times"></i>Bạn bè ngoại trừ...
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-user"></i>Bạn bè cụ thể
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-lock"></i>Chỉ mình tôi
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-cog"></i>Tùy chỉnh
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button className="save-active">Lưu</Button>
                  <Button className="button-flex" onClick={changeOpen3}>
                    Hủy
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        )}
      </div>
      <div className="add-country">
        {open4 === false && (
          <div className="add-work" onClick={changeOpen4}>
            <i className="fa fa-plus" aria-hidden="true"></i> Thêm quê quán của
            bạn
          </div>
        )}
        {open4 === true && (
          <div className="description-work">
            <Form>
              <Form.Group>
                <Row>
                  <Col lg={3} className="float-form-rs">
                    <Form.Label>Quê quán</Form.Label>
                  </Col>
                  <Col lg={9}>
                    <Form.Control type="email" placeholder="Nhập quê quán" />
                  </Col>
                </Row>
                <div className="flex-btn">
                  <Dropdown>
                    <Dropdown.Toggle className="post-dot triangle-dropdown">
                      <i
                        className="fa fa-globe"
                        aria-hidden="true"
                        id="dropdown-basic"
                      ></i>
                      <span>Công Khai</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu3">
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-globe"></i>Công khai
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-users"></i>Bạn của bạn bè
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-user-plus"></i>Bạn bè
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-user-times"></i>Bạn bè ngoại trừ...
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-user"></i>Bạn bè cụ thể
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-lock"></i>Chỉ mình tôi
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item-icon">
                        <i className="fa fa-cog"></i>Tùy chỉnh
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button className="save-active">Lưu</Button>
                  <Button className="button-flex" onClick={changeOpen4}>
                    Hủy
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        )}
      </div>
      {dataCity.map((data, index) => {
        return (
          <div className="post post-row post-border-c" key={data.id}>
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
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Công khai</Tooltip>}
                  >
                    <span className="d-inline-block tooltip-globe">
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </span>
                  </OverlayTrigger>
                  <i
                    className="fa fa-ellipsis-h"
                    aria-hidden="true"
                    id="dropdown-basic"
                  ></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu2">
                  <Dropdown.Item href="#/action-1">Xóa</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Sửa</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        );
      })}
    </Tab.Pane>
  );
}

export default Tab3;
