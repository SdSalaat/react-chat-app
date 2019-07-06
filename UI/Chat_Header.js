import React from 'react';


const Chat_Header = () => {
    return (
        <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
                <div className="img_cont">
                    <img src="https://booksy.com/mp/images/default-avatar.png"
                         className="rounded-circle user_img" />
                    <span className="online_icon"> </span>
                </div>
                <div className="user_info">
                    <span>Maryam Naz</span>
                    <p>1767 Messages</p>
                </div>
            </div>
        </div>
    );

};

export default Chat_Header;
//
// <div className="video_cam">
//     <span> <i className="fas fa-video"> </i> </span>
//     <span> <i className="fas fa-phone"> </i> </span>
// </div>
