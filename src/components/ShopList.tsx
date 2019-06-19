import * as React from "react";
import { Table } from "antd";
import { IShop } from "../store";

interface IProps {
  loading: boolean;
  data?: IShop[];
}

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "가게명",
    dataIndex: "shopName",
    key: "shopName"
  },
  {
    title: "주인장",
    dataIndex: "ownerName",
    key: "ownerName"
  },
  {
    title: "주소",
    dataIndex: "address",
    key: "address"
  }
];

export const ShopList: React.FC<IProps> = props => (
  <Table columns={columns} dataSource={props.data} loading={props.loading} />
);
