import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Profile from "./Profile";
import { Navigate, useParams } from "react-router-dom";
import { setUserProfile } from '../../redux/profile-reducer';
import { getUserProfile } from "../../redux/profile-reducer";

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }


    render() {

        if (!this.props.isAuth) return <Navigate to="/login" replace={true} />

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);


