import * as React from "react";
import { PageHeader } from "../components";
import { OrderListContainer, AuthContainer } from "../containers";

interface IProps {}

export default class Order extends React.PureComponent<IProps> {
  render() {
    return (
      <React.Fragment>
        <AuthContainer>
          <PageHeader label="주문" />
        </AuthContainer>
        <OrderListContainer />
      </React.Fragment>
    );
  }
}
