import { connect } from 'herculex';
const pageConfig = {
  data: {},
  onLoad() {
    const { userInfo, bannerList } = this.props;

    console.log('User Info:', userInfo);
    console.log('Banner List:', bannerList);

    // You can also call actions directly
    this.props.getUserInfo();
  },
};

const mapStateToData = state => ({
  userInfo: state.userInfo,
  bannerList: state.bannerList,
});

const mapDispatchToPage = dispatch => ({
  getUserInfo: dispatch.userInfo.getUserInfo,
});

const connectedPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);

Page(connectedPageConfig);