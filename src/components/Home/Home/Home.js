import React from 'react';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import GetAppointment from '../GetAppointment/GetAppointment';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Welcome></Welcome>
            {/* <Services></Services> */}
            {/* <Doctors></Doctors> */}
            {/* <GetAppointment></GetAppointment> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;