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
            ]
        },
        friendsPage: {
            friendsData: [
                { id: 1, name: 'Sasha' },
                { id: 2, name: 'Kristina' },
                { id: 3, name: 'Annya' },
                { id: 4, name: 'Petya' },
                { id: 5, name: 'Artur' }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}

export default store;
window.store = store;