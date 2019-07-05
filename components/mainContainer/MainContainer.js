import React from 'react';
import UsersWindow from "../usersWindow/UsersWindow";
import ChatsWindow from "../chatsWindow/chatsWindow";


const MainContainer = () => {
    return (
        <div className="container-fluid h-100 chat-new">
            <div className="row justify-content-center h-100">
                <ChatsWindow/>
                <UsersWindow/>
            </div>
        </div>
    );

};

export default MainContainer
