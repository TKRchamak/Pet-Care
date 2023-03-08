import React from 'react';

const ChooseUsCard = ({ title, icon, pera }) => {
    return (
        <div className="bg-light p-3 border rounded">
            <div className="d-flex align-items-center justify-content-between">
                <p style={{ fontSize: "40px" }}>{icon}</p>
                <h5 className='text-end'>{title}</h5>
            </div>
            <div className="">
                <p>{pera}</p>
            </div>
        </div>
    );
};

export default ChooseUsCard;