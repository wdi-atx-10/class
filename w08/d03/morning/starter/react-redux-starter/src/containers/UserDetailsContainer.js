import { connect } from 'react-redux';

import UserDetails from '../components/UserDetails';

// "state.activeUser" is set in reducers/index.js
const mapStateToProps = (state) => {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetails);
