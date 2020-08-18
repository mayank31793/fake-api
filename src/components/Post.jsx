import React, { useState } from 'react';

import './Post.scss';
import Loader from './Loader';
import Modal from './Modal';

const Post = (props) => {
    const [openModal,setOpenModal] = useState({});

    const handleInfo = (info) => {
        setOpenModal(info);
    }

    if(props.loading){
        return <Loader />
    }

    return (
        <div>
            <table className="dataTable">
                <tbody>
                    {props.postData.filter((response) => response.first_name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1).map((res,i) => (
                        <tr key={i} onClick={() => handleInfo(res)}>
                            <td>
                                <div className="imageContainer">
                                    <img src={res.avatar} />
                                </div>        
                            </td>
                            <td>
                                <label htmlFor="modal"></label>
                                <p><b>Name:</b> <span>{res.first_name+" "+res.last_name}</span></p>
                                <b>Email:</b> <i>{res.email}</i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal openModal={openModal} />
        </div>
    );
}
 
export default Post;