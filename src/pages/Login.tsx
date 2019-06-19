import * as React from "react";
import { connect } from "react-redux";
import { IStoreState } from "../store";
import { requestLogin } from "../actions";
import { Login as LoginComponent, ILoginComponentProps } from "../components";

const Login: React.FC<ILoginComponentProps> = props => (
  <LoginComponent {...props} />
);

export default connect(
  (state: IStoreState) => ({
    authentication: state.authentication
  }),
  dispatch => ({
    requestLogin: (username: string, password: string) =>
      dispatch(requestLogin(username, password))
  })
)(Login);
