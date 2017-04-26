import { connect } from 'react-redux';

import UserDetails from '../components/UserDetails';

const getUser = (users, userId) => {
  return users.find(user => user.id === parseInt(userId, 10));
}

// http://redux.js.org/docs/advanced/UsageWithReactRouter.html
const mapStateToProps = (state, ownProps) => {
  return {
    user: getUser(state.users, ownProps.match.params.userId)
  };
}

export default connect(mapStateToProps)(UserDetails);
