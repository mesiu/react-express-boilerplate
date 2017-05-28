import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem, removeItem, starItem } from '../../actions/shopping';
import Shopping from '../../components/Shopping/Shopping';

const getVisibleItems = (items, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'SHOW_STARRED':
      return items.filter((item) => {
        return item.isStarred;
      });
    default:
      return items;
  }
};

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.shopping, state.visibilityFilter),
    total: state.shopping.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ addItem, removeItem, starItem }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shopping);
