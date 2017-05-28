import { connect } from 'react-redux';

import { setVisibilityFilter } from '../../actions/shopping';
import FilterLink from '../../components/Shopping/FilterLink';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: {
      setVisibilityFilter: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
      },
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLink);
