import * as React from "react";
import { connect } from "react-redux";
import { IStoreState } from "../store";
import { OrderList as OrderListComponent } from "../components";

const mapStateToProps = (state: IStoreState) => ({
  ...state
});

const OrderList: React.FC = props => {
  return <OrderListComponent {...props} />;
};

export const OrderListContainer = connect(mapStateToProps)(OrderList);
