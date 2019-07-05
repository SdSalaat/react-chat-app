import React from 'react';


const UsersWindow = () => {
    return (
        <div className="col-md-4 col-xl-3 chat">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header">
                    <div className="input-group">
                        <input type="text" placeholder="Search..." name="" className="form-control search" />
                            <div className="input-group-prepend">
                                <span className="input-group-text search_btn"><i className="fas fa-search"> </i></span>
                            </div>
                    </div>
                </div>
                <div className="card-body contacts_body">
                    <ui className="contacts">
                        <li className="active">
                            <div className="d-flex bd-highlight">
                                <div className="img_cont">
                                    <img
                                        src="https://booksy.com/mp/images/default-avatar.png"
                                        className="rounded-circle user_img" />
                                        <span className="online_icon offline"> </span>
                                </div>
                                <div className="user_info">
                                    <span>Sahar Darya</span>
                                    <p>Sahar left 7 mins ago</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex bd-highlight">
                                <div className="img_cont">
                                    <img
                                        src="https://booksy.com/mp/images/default-avatar.png"
                                        className="rounded-circle user_img" />
                                        <span className="online_icon"> </span>
                                </div>
                                <div className="user_info">
                                    <span>Yolduz Rafi</span>
                                    <p>Yolduz is online</p>
                                </div>
                            </div>
                        </li>
                    </ui>
                </div>
                <div className="card-footer"> </div>
            </div>
        </div>
    );

};

export default UsersWindow
