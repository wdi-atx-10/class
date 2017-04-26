import { connect } from 'react-redux';

import AddUser from '../components/AddUser';

// "state.activeUser" is set in reducers/index.js
const mapStateToProps = (state) => {
  return {
    user: state.newUser
  };
}

export default connect(mapStateToProps)(AddUser);
