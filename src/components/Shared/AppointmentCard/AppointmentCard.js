import React from 'react';
import './AppointmentCard.css';

const AppointmentCard = ({ title, icon, numb, pera }) => {
    return (
        <div className="appointmentCard p-2 rounded text-center">
            <div className="d-flex align-items-center justify-content-center">
                <div style={{ fontSize: "40px", padding: "8px" }}>{icon}</div>
                <h5 className='text-end m-0'>{title}</h5>
            </div>

            <h3 className="text-style">{numb}</h3>
            <p>{pera}</p>
        </div>
    );
};

export default AppointmentCard;