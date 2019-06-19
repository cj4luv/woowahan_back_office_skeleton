import * as React from "react";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "No",
    dataIndex: "No",
    key: "No",
    render: no => <a href="javascript:;">{no}</a>
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date"
  },
  {
    title: "업소",
    dataIndex: "Shop",
    key: "Shop"
  },
  {
    title: "주문메뉴",
    key: "Menus",
    dataIndex: "Menus",
    render: menus => (
      <span>
        {menus.map(menu => {
          let color = menu.includes("치킨") ? "volcano" : "green";
          return (
            <Tag color={color} key={menu}>
              {menu.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">{record.No} 주문 취소 </a>
        <Divider type="vertical" />
        <a href="javascript:;">삭제</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    No: "OD001",
    Date: "2019-05-30 17:53:24",
    Shop: "처갓집양념치킨 풍납점",
    Menus: ["더 화이트 치킨 순살", "후라이드치킨"]
  },
  {
    key: "2",
    No: "OD002",
    Date: "2019-05-30 17:54:14",
    Shop: "쌀통닭 길동점",
    Menus: ["쌀통닭", "1980양념", "똥집세트1"]
  },
  {
    key: "3",
    No: "OD003",
    Date: "2019-05-30 17:55:59",
    Shop: "청 치킨 본점",
    Menus: ["애플파닭"]
  }
];

export const OrderList: React.FC = () => (
  <Table columns={columns} dataSource={data} />
);
