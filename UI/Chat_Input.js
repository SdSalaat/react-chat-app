import React from 'react';


const Chat_Input = () => {
    return (
        <div className="input-group">
            <textarea name="" className="form-control type_msg" placeholder="Type your message...">

            </textarea>
            <div className="input-group-append">
                <span className="input-group-text send_btn"> <i className="fas fa-location-arrow"> </i> </span>
            </div>
        </div>
    );

};

export default Chat_Input;

//
// <div className="input-group-append">
//     <span className="input-group-text attach_btn"> <i className="fas fa-paperclip"> </i> </span>
// </div>
