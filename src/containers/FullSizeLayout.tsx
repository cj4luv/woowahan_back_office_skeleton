import * as React from "react";
import { Row, Col } from "antd";

interface IProps {
  children?: React.ReactNode;
}

export const FullSizeLayout: React.FC<IProps> = props => {
  return (
    <Row
      type="flex"
      justify="space-around"
      align="middle"
      style={{
        height: "100vh"
      }}
    >
      <Col>{props.children}</Col>
    </Row>
  );
};
