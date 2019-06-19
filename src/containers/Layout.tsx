import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IStoreState } from "../store";
import { Row, Col, Layout, Drawer } from "antd";
import { NavLinkProps } from "react-router-dom";
import { closeNotificationCenter, hasRunningAsyncAction } from "../actions";
import { Sidebar } from "../components";
import styled from "styled-components";

const { Content } = Layout;

const FlexItem = styled(Row)`
  padding-top: 5px;
  padding-bottom: 10px;
`;

interface IProps {
  location?: any;
  runningAsyncTask: boolean;
  openNotificationCenter: boolean;
  closeNotificationCenter(): void;
  children?: React.ReactNode;
}

const mapStateToProps = (state: IStoreState) => ({
  runningAsyncTask: hasRunningAsyncAction(state.asyncTasks),
  openNotificationCenter: state.openNotificationCenter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeNotificationCenter: () => dispatch(closeNotificationCenter())
});

class LayoutContainer extends React.PureComponent<IProps, NavLinkProps> {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Drawer
          title="알림"
          placement="right"
          closable={true}
          visible={this.props.openNotificationCenter}
          onClose={() => this.props.closeNotificationCenter()}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>

        <Sidebar
          location={this.props.location}
          runningAsyncTask={this.props.runningAsyncTask}
        />

        <Layout>
          <Content style={{ backgroundColor: "#fff" }}>
            <FlexItem type="flex" align="middle">
              <Col style={{ flex: 1 }}>{this.props.children}</Col>
            </FlexItem>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export const DefaultLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer);
