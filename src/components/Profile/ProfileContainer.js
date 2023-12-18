import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
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
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

// import {
//     useLocation,
//     useNavigate,
//     useParams,
// } from "react-router-dom";

// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }

//     return ComponentWithRouterProp;
// }


// function ProfileContainer(props) {
//     debugger
//     let { userId } = useParams();

//     if (!userId) {
//         userId = 2;
//     }

//     useEffect(() => {
//         this.props.getUserProfile(userId);
//     }, [userId]);

//     return (
//         <div>
//             <Profile profile={props.profile} />
//         </div>
//     );
// }

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// })

// export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
// export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));



// class ProfileContainer extends React.Component {
//     componentDidMount() {
//         // debugger;
//         //
//         console.log(this.props);
//         let userId = this.props.params.userId;
//         if (!userId) {
//             userId = 2;
//         }
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//             .then(response => {
//                 // debugger;
//                 this.props.setUserProfile(response.data);
//             });
//     }
//     render() {
//         // debugger;
//         return (
//             <Profile {...this.props} profile={this.props.profile} />
//         )
//     }
// }




// export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);

