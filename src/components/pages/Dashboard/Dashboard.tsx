import { Col, Row } from "react-bootstrap";

import CommonHeading from "../../common/CommonHeading/CommonHeading";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className='dashboard_page'>
        <CommonHeading headingText='Trading Desk' />

        <Row>
          <Col xxl={3} md={5}></Col>
          <Col xxl={6} md={7}></Col>
          <Col xxl={3}></Col>
          <Col xs={12}></Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
