import React from 'react';


const Chat_Message = (props) => {
    if (props.position === 'start') {
        return (
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src="https://booksy.com/mp/images/default-avatar.png"
                         className="rounded-circle user_img_msg"/>
                </div>
                <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    Hi Maryam i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                    <img
                        src="https://booksy.com/mp/images/default-avatar.png"
                        className="rounded-circle user_img_msg"/>
                </div>
            </div>

        )
    }

};

export default Chat_Message;

