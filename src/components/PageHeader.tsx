import * as React from 'react';
import {
  Row,
  Col,
  Button,
  Avatar,
  Badge,
  Icon,
  Input,
  PageHeader as Header
} from 'antd';
import { IAuthentication } from '../store';
import { Maybe } from './Maybe';

const DEFAULT_PICTURE =
  'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

interface IProps {
  picture?: string;
  label?: string;
  authentication?: IAuthentication;
  requestLogout?: () => void;
  openNotificationCenter?: () => void;
}

export const PageHeader: React.FC<IProps> = ({
  label,
  authentication,
  requestLogout,
  openNotificationCenter
}) => {
  let avatar;
  if (authentication) {
    const { picture = DEFAULT_PICTURE } = authentication;
    avatar = picture;
  }

  const [activeSearch, toggleSearch] = React.useState(false);

  return (
    <Row
      type="flex"
      align="middle"
      style={{
        paddingTop: 5,
        paddingBottom: 10,
        borderBottom: '1px solid #ddd'
      }}
    >
      <Col style={{ flex: 1 }}>
        <Header
          title={<span>{label}</span>}
          extra={[
            <Maybe key="1" test={activeSearch}>
              <Input.Search
                onBlur={() => toggleSearch(false)}
                type="search"
                style={{ width: 200 }}
                autoFocus
              />
              ,
            </Maybe>,
            <Maybe key="2" test={!activeSearch}>
              <Button
                onClick={() => toggleSearch(true)}
                shape="circle"
                style={{ border: 'none' }}
                icon="search"
              />
            </Maybe>,
            <Button
              key="3"
              onClick={requestLogout}
              shape="circle"
              style={{ border: 'none' }}
            >
              <Avatar size="small" src={avatar} />
            </Button>,
            <Button
              key="4"
              onClick={openNotificationCenter}
              shape="circle"
              style={{ border: 'none' }}
            >
              <Badge count={3} dot={true}>
                <Icon type="bell" />
              </Badge>
            </Button>
          ]}
        />
      </Col>
    </Row>
  );
};
