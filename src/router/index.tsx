import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  DefaultLayout,
  FullSizeLayout,
  NotificationContainer
} from "../containers";
import * as Pages from "../pages";
import PrivateRoute from "./PrivateRoute";

interface IProps {
  children?: React.ReactNode;
}

const Router: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <NotificationContainer />
      <Switch>
        <Route exact path="/login">
          <FullSizeLayout>
            <Pages.Login />
          </FullSizeLayout>
        </Route>
        <DefaultLayout>
          <Switch>
            <PrivateRoute exact path="/" page={Pages.Dashboard} />
            <PrivateRoute exact path="/orders" page={Pages.Order} />
            <PrivateRoute exact path="/shops" page={Pages.Shops} />
            <Route component={Pages.PageNotFound} />
          </Switch>
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
