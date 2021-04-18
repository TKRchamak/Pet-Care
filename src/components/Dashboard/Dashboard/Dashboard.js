import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                
            </div>
        </section>
    );
};

export default Dashboard;