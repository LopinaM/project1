let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'Hi, how are you?', likesCount: '15' },
            { id: 2, message: "It's my first post!", likesCount: '20' }
        ]
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

}

export default state;