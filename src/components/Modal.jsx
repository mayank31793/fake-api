import React from 'react';

import './Modal.scss';

const Modal = ({openModal}) => {
    return (
        <div>
            <input className="modal-state" id="modal" type="checkbox" />
            <div className="modal">
                <label className="modal__bg" htmlFor="modal"></label>
                <div className="modal__inner">
                    <label className="modal__close" htmlFor="modal"></label>
                    <div className="ModalInfo">
                        <div className="ModalInfoDetails">
                            <p><b>Full Name:</b>{openModal.first_name+" "+openModal.last_name}</p>
                            <p><b>Email:</b><i>{openModal.email}</i></p>
                        </div>
                        <div className="ModalInfoAvatar">
                            <img src={openModal.avatar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;