import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers } from '../actions/get_users'

import Users from '../components/Users'

// Get app state and pass it as props to Users
//  whenever state changes, the Users will automatically re-render
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    users: state.users
  };
}

// Get actions and pass them as props to to Users
//  now Users has this.props.selectUser
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUsers }, dispatch);
}

// We don't want to return the plain Users (component) anymore, we want to return the smart Container
//  Users is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(Users);
