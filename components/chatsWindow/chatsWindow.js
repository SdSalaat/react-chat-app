import React from 'react';
import Chat_Header from "../../UI/Chat_Header";
import Chat_Message from "../../UI/Chat_Message";

const ChatsWindow = () => {
    return (
        <div style={{marginBottom: 10}} className="col-md-8 col-xl-6 chat">
            <div className="card">
                <Chat_Header />
                <div className="card-body msg_card_body">
                    <Chat_Message />
                    <Chat_Message />
                </div>
                <div className="card-footer">
                    <div className="input-group">
                        <div className="input-group-append">
                            <span className="input-group-text attach_btn"> <i className="fas fa-paperclip"> </i> </span>
                        </div>
                        <textarea name="" value='' className="form-control type_msg" placeholder="Type your message..."> </textarea>
                        <div className="input-group-append">
                            <span className="input-group-text send_btn"> <i className="fas fa-location-arrow"> </i> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ChatsWindow;
