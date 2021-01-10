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
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

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

export const dataLink = [
    {
      id: 1,
      description: "Khác"
    },
    {
      id: 2,
      description: "Facebook"
    },
    {
      id: 3,
      description: "Instagram"
    },
    {
      id: 4,
      description: "Kik"
    },
    {
      id: 5,
      description: "Line"
    },
    {
      id: 6,
      description: "Snapchat"
    },
    {
      id: 7,
      description: "Twitch"
    },
    {
      id: 8,
      description: "Twitter"
    },
    {
      id: 9,
      description: "Wechat"
    },
    {
      id: 10,
      description: "Youtube"
    }
  ];

function Tab4() {
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
    const [open10, setOpen10] = React.useState(false);
    const [open11, setOpen11] = React.useState(false);
    const [open12, setOpen12] = React.useState(false);
    const [open13, setOpen13] = React.useState(false);
    const [open14, setOpen14] = React.useState(false);
    const [open15, setOpen15] = React.useState(false);
  
    const [selectedDate, setSelectedDate] = React.useState(
      new Date("1999-10-01T21:11:54")
    );
    const changeOpen10 = () => {
        setOpen10(!open10);
      };
      const changeOpen11 = () => {
        setOpen11(!open11);
      };
      const changeOpen12 = () => {
        setOpen12(!open12);
      };
      const changeOpen13 = () => {
        setOpen13(!open13);
      };
      const changeOpen14 = () => {
        setOpen14(!open14);
      };
      const changeOpen15 = () => {
        setOpen15(!open15);
      };
      const handleDateChange = date => {
        setSelectedDate(date);
      };
      
  return (
        <Tab.Pane eventKey="tab4">
            <div className="work-tab2">Thông tin liên hệ</div>
            <div className="address-info">
            {open15 === false && (
                <Row>
                <Col lg={3}>
                    <div>Di động</div>
                </Col>
                <Col lg={6}>
                <div className="email-dev">
                    <span className="">
                        <a href="#">0321367834</a>
                        <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-disabled">
                            Public
                            </Tooltip>
                        }
                        >
                        <span className="d-inline-block tooltip-globe tooltip-2s">
                            <i
                            className="fa fa-globe"
                            aria-hidden="true"
                            ></i>
                        </span>
                        </OverlayTrigger>
                    </span>
                    </div>
                    <div className="email-dev">
                    <span className="">
                        <a href="#">0565723484</a>
                        <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-disabled">
                            Only me
                            </Tooltip>
                        }
                        >
                        <span className="d-inline-block tooltip-globe tooltip-2s">
                            <i
                            className="fa fa-lock"
                            aria-hidden="true"
                            ></i>
                        </span>
                        </OverlayTrigger>
                    </span>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="alone">
                    <span className="icon-span">
                        <a href="#" onClick={changeOpen15}>
                        Sửa
                        </a>
                    </span>
                    </div>
                </Col>
                </Row>
            )}
            {open15 === true && (
                <div className="description-work">
                <Form>
                    <Form.Group>
                    <Row>
                        <Col lg={3} className="float-form-rs">
                        <Form.Label>Di động</Form.Label>
                        </Col>
                        <Col lg={9}>
                        <Row className="font-email">
                            <Col lg={3}>
                            <div className="email-text">
                            0321367834
                            </div>
                            </Col>
                            <Col lg={3}>
                            <Dropdown className="dropdown-email">
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
                                    <i className="fa fa-globe"></i>Công
                                    khai
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-users"></i>Bạn của
                                    bạn bè
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user-plus"></i>Bạn
                                    bè
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user-times"></i>
                                    Bạn bè ngoại trừ...
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user"></i>Bạn bè
                                    cụ thể
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-lock"></i>Chỉ mình
                                    tôi
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-cog"></i>Tùy chỉnh
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Col>
                            <Col lg={3}>
                            <div className="email-text">
                                <a href="#" className="afont-email">
                                Xóa
                                </a>
                            </div>
                            </Col>
                        </Row>
                        <Row className="font-email font-email2">
                            <Col lg={3}>
                            <div className="email-text">
                             0565723484
                            </div>
                            </Col>
                            <Col lg={3}>
                            <Dropdown className="dropdown-email">
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
                                    <i className="fa fa-globe"></i>Công
                                    khai
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-users"></i>Bạn của
                                    bạn bè
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user-plus"></i>Bạn
                                    bè
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user-times"></i>
                                    Bạn bè ngoại trừ...
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user"></i>Bạn bè
                                    cụ thể
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-lock"></i>Chỉ mình
                                    tôi
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-cog"></i>Tùy chỉnh
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Col>
                            <Col lg={3}>
                            <div className="email-text">
                                <a href="#" className="afont-email">
                                Xóa
                                </a>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                            <FormControl className={classes.formControl}>
                                <NativeSelect
                                className={classes.selectEmpty}
                                value={state.age}
                                name="age"
                                onChange={handleChange}
                                inputProps={{ "aria-label": "age" }}
                                >
                                <option value="" disabled>
                                    + 84
                                </option>
                                <option>+ 84 Vietnam</option>
                                <option>+ 98 China</option>
                                <option>+ 357 Thailand</option>
                                <option>+ 84 Vietnam</option>
                                <option>+ 98 China</option>
                                <option>+ 357 Thailand</option>
                                <option>+ 84 Vietnam</option>
                                <option>+ 98 China</option>
                                <option>+ 357 Thailand</option>
                                <option>+ 84 Vietnam</option>
                                <option>+ 98 China</option>
                                <option>+ 357 Thailand</option>
                                <option>+ 84 Vietnam</option>
                                <option>+ 98 China</option>
                                <option>+ 357 Thailand</option>
                                <option>+ 84 Vietnam</option>
                                <option>+ 98 China</option>
                                <option>+ 357 Thailand</option>
                                <option>+ 84 Vietnam</option>
                                <option>+ 98 China</option>
                                <option>+ 357 Thailand</option>
                                <option>+ 84 Vietnam</option>
                                <option>+ 98 China</option>
                                <option>+ 357 Thailand</option>
                                </NativeSelect>
                            </FormControl>
                            </Col>
                            <Col lg={8}>
                                <Form.Control
                                className="form-email-example"
                                type="email"
                                placeholder="name@example.com"
                            />
                            </Col>
                        </Row>
                        
                        <button className="add-email">
                            Thêm số khác
                        </button>
                        </Col>
                    </Row>

                    <div className="flex-btn">
                        <Button className="save-active">Lưu</Button>
                        <Button
                        className="button-flex"
                        onClick={changeOpen15}
                        >
                        Hủy
                        </Button>
                    </div>
                    </Form.Group>
                </Form>
                </div>
            )}
            </div>
            <div className="address-info">
            {open14 === false && (
                <Row>
                <Col lg={3}>
                    <div>Địa chỉ</div>
                </Col>
                <Col lg={6}>
                    <div>Ho Chi Minh City, Vietnam</div>
                </Col>
                <Col lg={3}>
                    <div className="alone">
                    <span className="icon-span">
                        <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-disabled">
                            Public
                            </Tooltip>
                        }
                        >
                        <span className="d-inline-block tooltip-globe">
                            <i
                            className="fa fa-globe"
                            aria-hidden="true"
                            ></i>
                        </span>
                        </OverlayTrigger>

                        <a href="#" onClick={changeOpen14}>
                        Sửa
                        </a>
                    </span>
                    </div>
                </Col>
                </Row>
            )}
            {open14 === true && (
                <div className="description-work">
                <Form>
                    <Form.Group>
                    <Row>
                        <Col lg={3} className="float-form-rs">
                        <Form.Label className="company">
                            Địa chỉ
                        </Form.Label>
                        </Col>
                        <Col lg={9}>
                        <Form.Control placeholder="Địa chỉ" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} className="float-form-rs">
                        <Form.Label className="company">
                            Thành phố/tỉnh
                        </Form.Label>
                        </Col>
                        <Col lg={9}>
                        <Form.Control
                            type="email"
                            placeholder="Nhập địa điểm"
                        />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} className="float-form-rs">
                        <Form.Label>Mã vùng</Form.Label>
                        </Col>
                        <Col lg={9}>
                        <Form.Control
                            type="email"
                            placeholder="Mã v"
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
                            <i className="fa fa-users"></i>Bạn của bạn
                            bè
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-item-icon">
                            <i className="fa fa-user-plus"></i>Bạn bè
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-item-icon">
                            <i className="fa fa-user-times"></i>Bạn bè
                            ngoại trừ...
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
                        <Button
                        className="button-flex"
                        onClick={changeOpen14}
                        >
                        Hủy
                        </Button>
                    </div>
                    </Form.Group>
                </Form>
                </div>
            )}
            </div>

            <div className="email-info">
            {open13 === false && (
                <Row>
                <Col lg={3}>
                    <div>Email</div>
                </Col>
                <Col lg={6}>
                    <div className="email-dev">
                    <span className="">
                        <a href="#">abc@gmail.com</a>
                        <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-disabled">
                            Public
                            </Tooltip>
                        }
                        >
                        <span className="d-inline-block tooltip-globe tooltip-2s">
                            <i
                            className="fa fa-globe"
                            aria-hidden="true"
                            ></i>
                        </span>
                        </OverlayTrigger>
                    </span>
                    </div>
                    <div className="email-dev">
                    <span className="">
                        <a href="#">def@yahoo.com</a>
                        <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-disabled">
                            Only me
                            </Tooltip>
                        }
                        >
                        <span className="d-inline-block tooltip-globe tooltip-2s">
                            <i
                            className="fa fa-lock"
                            aria-hidden="true"
                            ></i>
                        </span>
                        </OverlayTrigger>
                    </span>
                    </div>
                </Col>
                <Col lg={3}>
                    <a
                    href="#"
                    className="icon-span"
                    onClick={changeOpen13}
                    >
                    Sửa
                    </a>
                </Col>
                </Row>
            )}
            {open13 === true && (
                <div className="description-work">
                <Form>
                    <Form.Group>
                    <Row>
                        <Col lg={3} className="float-form-rs">
                        <Form.Label>Email</Form.Label>
                        </Col>
                        <Col lg={9}>
                        <Row className="font-email">
                            <Col lg={3}>
                            <div className="email-text">
                                abc@gmail.com
                            </div>
                            </Col>
                            <Col lg={3}>
                            <Dropdown className="dropdown-email">
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
                                    <i className="fa fa-globe"></i>Công
                                    khai
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-users"></i>Bạn của
                                    bạn bè
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user-plus"></i>Bạn
                                    bè
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user-times"></i>
                                    Bạn bè ngoại trừ...
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user"></i>Bạn bè
                                    cụ thể
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-lock"></i>Chỉ mình
                                    tôi
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-cog"></i>Tùy chỉnh
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Col>
                            <Col lg={3}>
                            <div className="email-text">
                                <a href="#" className="afont-email">
                                Xóa
                                </a>
                            </div>
                            </Col>
                        </Row>
                        <Row className="font-email font-email2">
                            <Col lg={3}>
                            <div className="email-text">
                                def@yahoo.com
                            </div>
                            </Col>
                            <Col lg={3}>
                            <Dropdown className="dropdown-email">
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
                                    <i className="fa fa-globe"></i>Công
                                    khai
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-users"></i>Bạn của
                                    bạn bè
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user-plus"></i>Bạn
                                    bè
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user-times"></i>
                                    Bạn bè ngoại trừ...
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-user"></i>Bạn bè
                                    cụ thể
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-lock"></i>Chỉ mình
                                    tôi
                                </Dropdown.Item>
                                <Dropdown.Item className="drop-item-icon">
                                    <i className="fa fa-cog"></i>Tùy chỉnh
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Col>
                            <Col lg={3}>
                            <div className="email-text">
                                <a href="#" className="afont-email">
                                Xóa
                                </a>
                            </div>
                            </Col>
                        </Row>
                        <Row></Row>
                        <Form.Control
                            className="form-email-example"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <button className="add-email">
                            Thêm email
                        </button>
                        </Col>
                    </Row>

                    <div className="flex-btn">
                        <Button className="save-active">Lưu</Button>
                        <Button
                        className="button-flex"
                        onClick={changeOpen13}
                        >
                        Hủy
                        </Button>
                    </div>
                    </Form.Group>
                </Form>
                </div>
            )}
            </div>
            <Row className="url-hahalolo">
            <Col lg={3}>
                <div>Hahalolo URL</div>
            </Col>
            <Col lg={6}>
                <a href="#" className="hahalolo-link">
                https://hahalolo.com/tienle
                </a>
            </Col>
            <Col lg={3}>
                <a href="#" className="icon-span">
                Sửa
                </a>
            </Col>
            </Row>
            <div className="web-info">
            {open12 === false && (
                <Row>
                <Col lg={3}>
                    <div>Các trang web và liên kết xã hội</div>
                </Col>
                <Col lg={6}>
                    <div>https://hahalolo.com/tienle</div>
                </Col>
                <Col lg={3}>
                    <div className="alone">
                    <span className="icon-span">
                        <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-disabled">
                            Public
                            </Tooltip>
                        }
                        >
                        <span className="d-inline-block tooltip-globe">
                            <i
                            className="fa fa-globe"
                            aria-hidden="true"
                            ></i>
                        </span>
                        </OverlayTrigger>

                        <a href="#" onClick={changeOpen12}>
                        Sửa
                        </a>
                    </span>
                    </div>
                </Col>
                </Row>
            )}
            {open12 === true && (
                <div className="description-work">
                <Form>
                    <Form.Group>
                    <Row>
                        <Col lg={3} className="float-form-rs">
                        <Form.Label>Thêm trang web</Form.Label>
                        </Col>
                        <Col lg={5}>
                        <Form.Control
                            type="email"
                            placeholder="Nhập liên kết của bạn"
                        />
                        </Col>
                        <Col lg={4}>
                        <FormControl className={classes.formControl}>
                            <NativeSelect
                            className={classes.selectEmpty}
                            value={state.age}
                            name="age"
                            onChange={handleChange}
                            inputProps={{ "aria-label": "age" }}
                            >
                            <option value="" disabled>
                                Chọn liên kết của bạn
                            </option>
                            {dataLink.map((datalink, index) => {
                                return(
                                    <option key={datalink.id}>{datalink.description}</option>
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
                            <i className="fa fa-users"></i>Bạn của bạn
                            bè
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-item-icon">
                            <i className="fa fa-user-plus"></i>Bạn bè
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-item-icon">
                            <i className="fa fa-user-times"></i>Bạn bè
                            ngoại trừ...
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
                        <Button
                        className="button-flex"
                        onClick={changeOpen12}
                        >
                        Hủy
                        </Button>
                    </div>
                    </Form.Group>
                </Form>
                </div>
            )}
            </div>
            <div className="work-tab2 information">Thông tin cơ bản</div>
            <div className="row-info1">
            {open10 === false && (
                <Row>
                <Col lg={3}>
                    <div>Ngày sinh</div>
                </Col>
                <Col lg={6}>
                    <div>01/10/1999</div>
                </Col>
                <Col lg={3}>
                    <a
                    href="#"
                    className="icon-span"
                    onClick={changeOpen10}
                    >
                    Sửa
                    </a>
                </Col>
                </Row>
            )}
            {open10 === true && (
                <div className="description-work">
                <Form>
                    <Form.Group>
                    <Row>
                        <Col lg={3} className="float-form-rs">
                        <Form.Label>Ngày sinh</Form.Label>
                        </Col>
                        <Col lg={9}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                "aria-label": "change date"
                                }}
                            />
                            </Grid>
                        </MuiPickersUtilsProvider>
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
                            <i className="fa fa-users"></i>Bạn của bạn
                            bè
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-item-icon">
                            <i className="fa fa-user-plus"></i>Bạn bè
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-item-icon">
                            <i className="fa fa-user-times"></i>Bạn bè
                            ngoại trừ...
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
                        <Button
                        className="button-flex"
                        onClick={changeOpen10}
                        >
                        Hủy
                        </Button>
                    </div>
                    </Form.Group>
                </Form>
                </div>
            )}
            </div>
            <div className="row-info2">
            {open11 === false && (
                <Row>
                <Col lg={3}>
                    <div>Giới tính</div>
                </Col>
                <Col lg={6}>
                    <div>Nam</div>
                </Col>
                <Col lg={3}>
                    <a
                    href="#"
                    className="icon-span"
                    onClick={changeOpen11}
                    >
                    Sửa
                    </a>
                </Col>
                </Row>
            )}
            {open11 === true && (
                <div className="description-work">
                <Form>
                    <Form.Group>
                    <Row>
                        <Col lg={3} className="float-form-rs">
                        <Form.Label>Giới tính</Form.Label>
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
                                Chọn giới tính
                            </option>
                            <option>Khác</option>
                            <option>Nam</option>
                            <option>Nữ</option>
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
                            <i className="fa fa-users"></i>Bạn của bạn
                            bè
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-item-icon">
                            <i className="fa fa-user-plus"></i>Bạn bè
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-item-icon">
                            <i className="fa fa-user-times"></i>Bạn bè
                            ngoại trừ...
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
                        <Button
                        className="button-flex"
                        onClick={changeOpen11}
                        >
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

export default Tab4;
