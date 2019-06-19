import * as React from "react";
import { PageHeader } from "../components";
import { ShopListContainer, AuthContainer } from "../containers";
import styled from "styled-components";

interface IProps {}

const ContentBody = styled.div`
  padding: 30px;
`;

export default class Order extends React.PureComponent<IProps> {
  render() {
    return (
      <React.Fragment>
        <AuthContainer>
          <PageHeader label="가게" />
        </AuthContainer>
        <ContentBody>
          <ShopListContainer />
        </ContentBody>
      </React.Fragment>
    );
  }
}
