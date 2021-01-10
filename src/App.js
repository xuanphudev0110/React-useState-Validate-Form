import React from "react";
import { Tab, Container, Row, Col } from "react-bootstrap";
import "./App.css";

import TabComponent from "./Components/TabComponent";
import Tab1 from "./Components/Tab1";
import Tab2 from "./Components/Tab2";
import Tab3 from "./Components/Tab3";
import Tab4 from "./Components/Tab4";
import Tab5 from "./Components/Tab5";
import Tab6 from "./Components/Tab6";
import Tab7 from "./Components/Tab7";

function App() {
  return (
    <div className="App">
      <Container className="box-container">
        <div className="version">Giới thiệu</div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
          <Row>
            <Col md={3} sm={12}>
              <TabComponent />
            </Col>
            <Col md={9} sm={12}>
              <Tab.Content>
                <Tab1 />
                <Tab2 />
                <Tab3 />
                <Tab4 />
                <Tab5 />
                <Tab6 />
                <Tab7 />
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default App;
