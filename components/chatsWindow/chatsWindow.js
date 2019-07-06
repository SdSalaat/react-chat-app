import React from 'react';
import Chat_Header from "../../UI/Chat_Header";
import Chat_Message from "../../UI/Chat_Message";
import Chat_Input from "../../UI/Chat_Input";

const ChatsWindow = () => {
    return (
        <div style={{marginBottom: 10}} className="col-md-8 col-xl-6 chat">
            <div className="card">
                <Chat_Header />
                <div className="card-body msg_card_body">
                    <Chat_Message position='start' />
                    <Chat_Message position='end' />
                </div>
                <div className="card-footer">
                    <Chat_Input />
                </div>
            </div>
        </div>
    );

};

export default ChatsWindow;
