import { connect } from 'react-redux';

import Users from '../components/Users'

// Get app state and pass it as props to Users
//  whenever state changes, the Users will automatically re-render
const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

// We don't want to return the plain Users (component) anymore, we want to return the smart Container
//  Users is now aware of state and actions
export default connect(mapStateToProps)(Users);
