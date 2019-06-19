import * as React from "react";
import { OrderStatusContiner, AuthContainer } from "../containers";
import { PageHeader } from "../components";

interface IProps {}

const Dashboard: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      <AuthContainer>
        <PageHeader label="대시보드" />
      </AuthContainer>
      <OrderStatusContiner />
    </React.Fragment>
  );
};

export default Dashboard;
