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
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxHeight: 50
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const datatab6 = [
  {
    id: 1,
    description: "1. Yêu Tổ Quốc, yêu đồng bào."
  },
  {
    id: 2,
    description: "2. Học tập tốt, lao động tốt."
  },
  {
    id: 3,
    description: "3. Đoàn kết tốt, kỷ luật tốt."
  },
  {
    id: 4,
    description: "4. Giữ gìn vệ sinh thật tốt."
  },
  {
    id: 5,
    description: "5. Khiêm tốn, thật thà, dũng cảm."
  },
  {
    id: 6,
    description: "Hồ Chí Minh ♡"
  },
  {
    id: 7,
    description: "Yêu Bác, lòng ta trong sáng hơn!"
  }
];

export const dataSelect = [
  {
    id: 1,
    description: "Biệt hiệu"
  },
  {
    id: 2,
    description: "Cách viết tên khác"
  },
  {
    id: 3,
    description: "Tên khác"
  },
  {
    id: 4,
    description: "Tên cũ"
  },
  {
    id: 5,
    description: "Tên có chức danh"
  },
  {
    id: 6,
    description: "Tên đã kết hôn"
  },
  {
    id: 7,
    description: "Tên khai sinh"
  },
  {
    id: 8,
    description: "Tên nước ngoài"
  },
  {
    id: 9,
    description: "Tên đã kết hôn"
  },
  {
    id: 10,
    description: "Tên có chức danh"
  }
];

export const dataName = [
  {
    id: 1,
    name: "UI",
    description: "Biệt danh"
  },
  {
    id: 2,
    name: "Tiến sĩ DEV",
    description: "Khác"
  },
  {
    id: 2,
    name: "Hahalolo DEV",
    description: "Biệt danh"
  }
];

function Tab6() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const changeOpen7 = () => {
    setOpen7(!open7);
  };
  const changeOpen8 = () => {
    setOpen8(!open8);
  };
  const changeOpen9 = () => {
    setOpen9(!open9);
  };
  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  return (
    <Tab.Pane eventKey="tab6">
      <div className="work-tab2">Giới thiệu về bản thân</div>
      <div className="add-profile">
        <div className="add-work" onClick={changeOpen7}>
          <i className="fa fa-plus" aria-hidden="true"></i> Viết một số chi tiết
          về bản thân bạn
        </div>
      </div>
      <div className="add-profile2">
        {open7 === false && (
          <div className="alone">
            Đơn giản, dễ tính, vui vẻ, chân thành và nhiệt tình
            <span className="icon-span">
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Public</Tooltip>}
              >
                <span className="d-inline-block tooltip-globe">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </span>
              </OverlayTrigger>

              <a href="#" onClick={changeOpen7}>
                Sửa
              </a>
            </span>
          </div>
        )}
        {open7 === true && (
          <div className="description-work">
            <Form>
              <Form.Group>
                <Row>
                  <Col lg={3} className="float-form-rs">
                    <Form.Label>Giới thiệu về bản thân</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Viết vài dòng giới thiệu"
                    />
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
                  <Button className="button-flex" onClick={changeOpen7}>
                    Hủy
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        )}
      </div>
      <div className="work-tab2 other-name">Các tên khác</div>
      {open8 === false && (
        <div className="add-work" onClick={changeOpen8}>
          <i className="fa fa-plus" aria-hidden="true"></i> Thêm biệt danh, tên
          khai sinh...
        </div>
      )}
      {open8 === true && (
        <div className="description-work">
          <Form>
            <Form.Group>
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label>Loại tên</Form.Label>
                </Col>
                <Col lg={6}>
                  <FormControl className={classes.formControl}>
                    <NativeSelect
                      className={classes.selectEmpty}
                      value={state.age}
                      name="age"
                      onChange={handleChange}
                      inputProps={{ "aria-label": "age" }}
                    >
                      <option value="" disabled>
                        Chọn biệt danh
                      </option>
                      {dataSelect.map((dataselect, index) => {
                        return (
                          <option key={dataselect.id}>
                            {dataselect.description}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </FormControl>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label>Tên</Form.Label>
                </Col>
                <Col lg={6}>
                  <Form.Control
                    type="email"
                    placeholder="Biệt danh của bạn là gì?"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Hiển thị đầu trang cá nhân"
                    className="form-check-box2"
                  />
                  <div className="form-check-box2">
                    Các tên khác luôn được công khai và giúp mọi người tìm thấy
                    bạn trên Hahalolo.
                  </div>
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
                <Button className="button-flex" onClick={changeOpen8}>
                  Hủy
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      )}
      {dataName.map((dataUI, index) => {
        return (
          <div className="post post-row post-border-c" key={dataUI.id}>
            <div className="post-body">
              <h6 className="post-title">{dataUI.name}</h6>
              <h6>{dataUI.description}</h6>
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
      <div className="work-tab2 other-name">Trích dẫn yêu thích</div>
      <div className="add-profile">
        <div className="add-work" onClick={changeOpen9}>
          <i className="fa fa-plus" aria-hidden="true"></i> Thêm trích dẫn yêu
          thích của bạn
        </div>
      </div>
      <div className="add-profile2">
        {open9 === false && (
          <Row>
            <Col lg={6}>
              <div className="vietnam-rs">
                {datatab6.map((data, index) => {
                  return <div key={data.id}>{data.description}</div>;
                })}
              </div>
            </Col>
            <Col lg={6}>
              <span className="icon-span">
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Public</Tooltip>}
                >
                  <span className="d-inline-block tooltip-globe">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </span>
                </OverlayTrigger>

                <a href="#" onClick={changeOpen9}>
                  Sửa
                </a>
              </span>
            </Col>
          </Row>
        )}
        {open9 === true && (
          <div className="description-work">
            <Form>
              <Form.Group>
                <Row>
                  <Col lg={3} className="float-form-rs">
                    <Form.Label>Trích dẫn yêu thích</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Viết một cái gì đó"
                    />
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
                  <Button className="button-flex" onClick={changeOpen9}>
                    Hủy
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        )}
      </div>
    </Tab.Pane>
  );
}

export default Tab6;
