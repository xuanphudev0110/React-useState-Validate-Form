import React from "react";
import {
  Tab,
  Row,
  Col,
  Dropdown,
  OverlayTrigger,
  Button,
  Tooltip,
  Form,
  Alert
} from "react-bootstrap";
import hinh1 from "../Images/1.jpg";
import hinh2 from "../Images/2.jpg";
import hinh3 from "../Images/3.jpg";
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

export const dataInfo = [
  {
    id: 1,
    image: hinh1,
    title: "Cô gái của tôi",
    description: "Vợ"
  },
  {
    id: 2,
    image: hinh3,
    title: "Xuyến Lê",
    description: "Em gái mưa"
  },
  {
    id: 3,
    image: hinh2,
    title: "Pham Phu",
    description: "Em trai"
  }
];

export const dataSelect = [
  {
    id: 1,
    description: "Cưới nhau"
  },
  {
    id: 2,
    description: "Đính hôn"
  },
  {
    id: 3,
    description: "Góa phụ"
  },
  {
    id: 4,
    description: "Ly thân"
  },
  {
    id: 5,
    description: "Ly hôn"
  },
  {
    id: 6,
    description: "Đồng tính"
  },
  {
    id: 7,
    description: "Phức tạp"
  },
  {
    id: 8,
    description: "Trong mối quan hệ mở"
  },
  {
    id: 9,
    description: "Trong một mối quan hệ"
  },
  {
    id: 10,
    description: "Sống chung"
  }
];

function Tab5() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });
  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);

  const changeOpen5 = () => {
    setOpen5(!open5);
  };
  const changeOpen6 = () => {
    setOpen6(!open6);
  };

  return (
    <Tab.Pane eventKey="tab5">
      <div className="work-tab2">Tình trạng mối quan hệ</div>
      {open5 === false && (
        <div className="alone">
          <i className="fa fa-heart"></i> Độc thân
          <span className="icon-span">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Public</Tooltip>}
            >
              <span className="d-inline-block tooltip-globe">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </span>
            </OverlayTrigger>

            <a href="#" onClick={changeOpen5}>
              Sửa
            </a>
          </span>
        </div>
      )}
      {open5 === true && (
        <div className="description-work">
          <Form>
            <Form.Group>
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label>Tình trạng</Form.Label>
                </Col>
                <Col lg={9}>
                  <FormControl className={classes.formControl}>
                    <NativeSelect
                      className={classes.selectEmpty}
                      value={state.age}
                      name="age"
                      onChange={handleChange}
                      inputProps={{ "aria-label": "age" }}
                    >
                      <option value="" disabled>
                        Chọn tình trạng
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
                <Button className="button-flex" onClick={changeOpen5}>
                  Hủy
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      )}
      <div className="work-tab2 family">Thành viên trong gia đình</div>
      {open6 === false && (
        <div className="add-work" onClick={changeOpen6}>
          <i className="fa fa-plus" aria-hidden="true"></i> Thêm thành viên vào
          gia đình
        </div>
      )}
      {open6 === true && (
        <div className="description-work">
          <Form>
            <Form.Group>
              <Row>
                <Col lg={3} className="float-form-rs">
                  <Form.Label>Thành viên gia đình</Form.Label>
                </Col>
                <Col lg={6}>
                  <div className="avatar-open6"></div>
                  <div className="media align-items-center mb-3">
                    <div className="media-body">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tên"
                      />
                    </div>
                  </div>
                  <FormControl className={classes.formControl}>
                    <NativeSelect
                      className={classes.selectEmpty}
                      value={state.age}
                      name="age"
                      onChange={handleChange}
                      inputProps={{ "aria-label": "age" }}
                    >
                      <option value="" disabled>
                        Chọn mối quan hệ
                      </option>
                      <option>Brother</option>
                      <option>Brother-in-law</option>
                      <option>Child(gender neutral)</option>
                      <option>Child of Sibling (gender neutral)</option>
                      <option>Child in law (gender neutral)</option>
                      <option>Cousin (female)</option>
                      <option>Cousin (gender neutral)</option>
                      <option>Cousin(Male)</option>
                      <option>Mother</option>
                      <option>Father</option>
                      <option>Daughter</option>
                      <option>Daughter in law</option>
                      <option>Family Member</option>
                      <option>Father in law</option>
                      <option>Grand child</option>
                      <option>GrandDAughter</option>
                      <option>GrandFather</option>
                      <option>Grand Mother</option>
                      <option>GrandParents</option>
                      <option>Nephew</option>
                      <option>Mother in law</option>
                      <option>Niece</option>
                      <option>GrandFather</option>
                      <option>Grand Mother</option>
                      <option>GrandParents</option>
                      <option>Grandson</option>
                      <option>GrandDAughter</option>
                      <option>GrandFather</option>
                      <option>Grand Mother</option>
                      <option>GrandParents</option>
                      <option>Nephew</option>
                      <option>Mother in law</option>
                      <option>Niece</option>
                      <option>GrandFather</option>
                      <option>Grand Mother</option>
                      <option>GrandParents</option>
                      <option>Grandson</option>
                    </NativeSelect>
                  </FormControl>
                  <Alert variant="info" className="alert-info6">
                    Chúng tôi sẽ yêu cầu xác nhận mối quan hệ này từ
                    <span> Xuyến Lê </span>khi lưu
                  </Alert>
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
                <Button className="button-flex" onClick={changeOpen6}>
                  Hủy
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      )}
      {dataInfo.map((datainfo, index) => {
        return (
          <div className="post post-row post-border-c" key={datainfo.id}>
            <div className="post-img">
              <img
                className="img-responsive img-update"
                alt="update"
                src={datainfo.image}
              />
            </div>
            <div className="post-body">
              <h6 className="post-title">{datainfo.title}</h6>
              <h6>{datainfo.description}</h6>
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

export default Tab5;
