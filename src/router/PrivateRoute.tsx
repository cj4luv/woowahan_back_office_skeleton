import * as React from "react";
import { IStoreState, IAuthentication } from "../store";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from "react-router-dom";
import { connect } from "react-redux";

type RoutePageComponent =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;

interface IProps {
  page: RoutePageComponent;
}

interface IStateToProps {
  authentication: IAuthentication;
}

const mapStateToProps = (
  state: IStoreState,
  ownProps: IProps
): IProps & IStateToProps => ({
  ...state,
  ...ownProps
});

const PrivateRouter: React.FC<IProps & IStateToProps & RouteProps> = props => {
  const Page: RoutePageComponent = props.page;
  const { authentication } = props;

  return (
    <Route
      {...props}
      render={props => {
        if (authentication) {
          return <Page {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    >
      {props.children}
    </Route>
  );
};

export default connect(mapStateToProps)(PrivateRouter);
