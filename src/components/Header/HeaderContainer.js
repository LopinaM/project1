import Header from './Header';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setAuthUserData } from "../../redux/auth-reducer";

import { getAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);