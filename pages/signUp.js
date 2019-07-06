import React from 'react';
import '../static/scss/index.scss';

const SignUp = () => {
    return (
        <>
            <div className="card-header msg_head">
                <div className="d-flex bd-highlight">

                </div>
            </div>

            <div className="container-fluid h-100 chat-new">
                <div className="row justify-content-center h-100">
                    <div style={{marginBottom: 10}} className="col-md-8 col-xl-6 chat">
                        <div className="card">
                            <div>
                                <div className="input-group">
                                    <input type="text" placeholder="Search..." name="" className="form-control search"/>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text search_btn"><i className="fas fa-search"> </i></span>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <input type="text" placeholder="Search..." name="" className="form-control search"/>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text search_btn"><i className="fas fa-search"> </i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;
