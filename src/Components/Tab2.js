import React, { useState } from "react";
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
import hinh1 from "../Images/1.jpg";
import hinh2 from "../Images/2.jpg";
export const dataSchool = [
  {
    id: 1,
    image: hinh1,
    title: "IT",
    description: "Dev · từ 2016 đến hiện tại"
  },
  {
    id: 2,
    image: hinh2,
    title: "Làm biếng",
    description: "Nội trợ · từ 1993 đến hiện tại"
  }
];

export const dataExp = [
  {
    id: 1,
    title: "Trường đại học khoa học Huế",
    description: "Địa điểm 1 · từ 2010 đến 2016"
  },
  {
    id: 2,
    title: "Trường đại học Phạm Văn Đồng",
    description: "Địa điểm 2 · từ 2010 đến 2016"
  }
];

function Tab2() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const changeOpen = () => {
    setOpen(!open);
  };
  const changeOpen2 = () => {
    setOpen2(!open2);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Tab.Pane eventKey="tab2">
      <div className="work-tab2">Công việc</div>
      {open === false && (
        <div className="add-work" onClick={changeOpen}>
          <i className="fa fa-plus" aria-hidden="true"></i> Thêm nơi làm việc
        </div>
      )}
      {open === true && (
        <div className="description-work">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label className="company">Công ty</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control
                    type="text"
                    placeholder="Tên công ty"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Error!!!
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label>Chức vụ</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control
                    type="text"
                    placeholder="Tên chức vụ"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Error!!!
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label className="company">Thành phố/ tỉnh</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control
                    type="text"
                    placeholder="Nhập địa điểm"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Error!!!
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label className="company">Mô tả</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder="Nhập mô tả"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Error!!!
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row className="recent-all">
                <Col lg={3}>
                  <Form.Label className="recent">Khoảng thời gian</Form.Label>
                </Col>
                <Col lg={9}>
                  <Row>
                    <Col lg={9}>
                      <Form.Check
                        required
                        label="Tôi đang làm việc ở đây"
                        feedback="You must agree before submitting."
                      />
                      <Row>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>2020</option>
                          </Form.Control>
                        </Col>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>09</option>
                          </Form.Control>
                        </Col>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>25</option>
                          </Form.Control>
                        </Col>
                      </Row>
                      <div className="float-form-rs">Đến</div>
                      <Row>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>2020</option>
                          </Form.Control>
                        </Col>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>04</option>
                          </Form.Control>
                        </Col>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>11</option>
                          </Form.Control>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form.Group>
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
              <Button className="save-active" type="submit">
                Lưu
              </Button>
              <Button className="button-flex" onClick={changeOpen}>
                Hủy
              </Button>
            </div>
          </Form>
        </div>
      )}
      {dataSchool.map((data, index) => {
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
      <div className="work-tab2 work-hv">Học vấn</div>
      {open2 === false && (
        <div className="add-work" onClick={changeOpen2}>
          <i className="fa fa-plus" aria-hidden="true"></i> Thêm học vấn
        </div>
      )}
      {open2 === true && (
        <div className="description-work">
          <Form>
            <Form.Group>
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label className="company">Trường học</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control placeholder="Trường học" />
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label className="company">Thành phố/tỉnh</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control type="email" placeholder="Nhập địa điểm" />
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label>Mô tả</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Mô tả công việc"
                  />
                </Col>
              </Row>
              <Row className="recent-all">
                <Col lg={3}>
                  <Form.Label className="recent">Khoảng thời gian</Form.Label>
                </Col>
                <Col lg={9}>
                  <Row>
                    <Col lg={9}>
                      <Row>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>2017</option>
                          </Form.Control>
                        </Col>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>01</option>
                          </Form.Control>
                        </Col>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>10</option>
                          </Form.Control>
                        </Col>
                      </Row>
                      <div className="float-form-rs">Đến</div>
                      <Row>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>2020</option>
                          </Form.Control>
                        </Col>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>04</option>
                          </Form.Control>
                        </Col>
                        <Col sm={4} mb={2}>
                          <Form.Control as="select">
                            <option>11</option>
                          </Form.Control>
                        </Col>
                      </Row>
                      <Form.Check
                        className="check-agree"
                        type="checkbox"
                        label="Đã tốt nghiệp"
                      />
                    </Col>
                  </Row>
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
                <Button className="button-flex" onClick={changeOpen2}>
                  Hủy
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      )}
      {dataExp.map((dataexp, index) => {
        return (
          <div className="post post-row post-border-c" key={dataexp.id}>
            <div className="post-img post-avatar"></div>
            <div className="post-body">
              <h6 className="post-title">{dataexp.title}</h6>
              <h6>{dataexp.description}</h6>
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

export default Tab2;
