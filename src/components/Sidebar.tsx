import * as React from "react";
import { Layout, Menu, Icon, Spin } from "antd";
import { Link } from "react-router-dom";
import { Location } from "history";
import { Maybe } from "./Maybe";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

interface IProps {
  location: Location;
  runningAsyncTask: boolean;
}

export const Sidebar: React.FC<IProps> = props => {
  return (
    <Sider width="250">
      <Header>
        <div
          style={{
            float: "left",
            width: 32,
            height: 31,
            background: "no-repeat url(images/woowabros.png) left/26px",
            margin: "16px 28px 16px -24px"
          }}
        />
        <div
          style={{
            float: "left",
            width: 126,
            height: 31,
            color: "white",
            marginLeft: -20
          }}
        >
          Backoffice 101
        </div>
        <Maybe test={props.runningAsyncTask}>
          <Spin style={{ float: "left", marginLeft: 90, marginTop: -8 }} />
        </Maybe>
      </Header>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[props.location.pathname]}
        defaultOpenKeys={[props.location.pathname.split("/").slice(1)[0]]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="dashboard" />
            대시보드
          </Link>
        </Menu.Item>

        <Menu.Item key="/shops">
          <Link to="/shops">
            <Icon type="sketch" />
            가게 목록
          </Link>
        </Menu.Item>

        <SubMenu
          key="orders"
          title={
            <span>
              <Icon type="rise" />
              거래 관리
            </span>
          }
        >
          <Menu.Item key="/orders">
            <Link to="/orders">주문</Link>
          </Menu.Item>

          <Menu.Item key="2">정산</Menu.Item>
        </SubMenu>
        <SubMenu
          key="event"
          title={
            <span>
              <Icon type="gift" />
              이벤트
            </span>
          }
        >
          <Menu.Item key="1">이벤트 대시보드</Menu.Item>
          <Menu.Item key="2">이벤트 리스트</Menu.Item>
        </SubMenu>
        <SubMenu
          key="setting"
          title={
            <span>
              <Icon type="setting" />
              설정
            </span>
          }
        >
          <Menu.Item key="1">
            <Link to="/settings/users">사용자 관리</Link>
          </Menu.Item>
          <Menu.Item key="2">권한 관리</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
