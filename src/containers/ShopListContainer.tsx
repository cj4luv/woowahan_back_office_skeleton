import * as React from "react";
import { connect } from "react-redux";
import { IStoreState, IShop, IAsyncTaskStatus } from "../store";
import { requestShopList, getAsyncId, isFinishAsyncAction } from "../actions";
import { ShopList as ShopListComponent } from "../components";

interface IProps {
  shopList: IShop[];
  asyncTasks: IAsyncTaskStatus[];
  requestShopList(): object;
}

interface IState {
  requestStatus: boolean;
  requestShopListId: string;
}

const mapStateToProps = (state: IStoreState) => ({
  asyncTasks: state.asyncTasks,
  shopList: state.shopList
});

class ShopList extends React.Component<IProps, IState> {
  state = {
    requestStatus: false,
    requestShopListId: ""
  };

  componentDidMount() {
    const action = this.props.requestShopList();

    this.setState({
      requestStatus: true,
      requestShopListId: getAsyncId(action)
    });
  }

  componentDidUpdate() {
    if (
      isFinishAsyncAction(this.props.asyncTasks, this.state.requestShopListId)
    ) {
      this.setState({
        requestStatus: false
      });
    }
  }

  render() {
    return (
      <ShopListComponent
        data={this.props.shopList}
        loading={this.state.requestStatus}
      />
    );
  }
}
/*
const ShopList: React.FC<IProps> = props => {
  const [requestStatus, setRequestStats] = React.useState(false);
  const [requestShopListId, setRequestShopListId] = React.useState("");

  React.useEffect(() => {
    const action = props.requestShopList();
    setRequestStats(true);
    setRequestShopListId(getAsyncId(action));
  }, []);

  React.useEffect(() => {
    if (isFinishAsyncAction(props.asyncTasks, requestShopListId)) {
      setRequestStats(false);
    }
  }, [props.asyncTasks]);

  return <ShopListComponent data={props.shopList} loading={requestStatus} />;
};
*/
export const ShopListContainer = connect(
  mapStateToProps,
  {
    requestShopList
  }
)(ShopList);
