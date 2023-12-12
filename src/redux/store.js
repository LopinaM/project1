import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are you?', likesCount: '15' },
                { id: 2, message: "It's my first post!", likesCount: '20' }
            ],
            newPostText: 'samuraiJs'
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Sasha' },
                { id: 2, name: 'Kristina' },
                { id: 3, name: 'Annya' }
            ],
            messagesData: [
                { id: 1, message: 'Hi, how are you?' },
                { id: 2, message: 'Fine' },
                { id: 3, message: 'How are you?' }
            ],
            newMessageBody: ""
        },
        usersPage: {
            usersData: [
                // { id: 1, name: 'Sasha' },
                // { id: 2, name: 'Kristina' },
                // { id: 3, name: 'Annya' },
                // { id: 4, name: 'Petya' },
                // { id: 5, name: 'Artur' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);

    }

}

export default store;
window.store = store;