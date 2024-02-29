import React from "react";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
