import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUserProfile } from "../../actions/profile_actions";

import NavBar from "./navbar";

const mSTP = ({ entities, session }) => {
  return {
    loggedIn: session.isAuthenticated,
    currentUser: session.user
    // profile: Object.values(entities.profile).filter(
    //   (profile) => profile.user === session.user.id
    // )[0],
  };
};

const mDTP = (dispatch) => ({
  logout: ()=> dispatch(logout()),
  fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId))
})

export default connect(mSTP, mDTP)(NavBar);
