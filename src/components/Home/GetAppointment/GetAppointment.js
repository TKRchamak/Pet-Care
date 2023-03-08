import React, { useState } from 'react';
import bird1 from '../../../Images/photo-1506220926022-cc5c12acdb35.jpg';
import './GetAppointment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import AppointmentCard from '../../Shared/AppointmentCard/AppointmentCard';
// import { indexOf } from 'lodash';

const GetAppointment = () => {
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleCustomerService = (e) => {

        fetch('https://powerful-spire-56228.herokuapp.com/addCustomer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: info.email, address: info.address, date: info.date, phone: info.phone, service: info.service })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Order Submitted')
                }
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }




    return (
        <div className="appointmentStyle" style={{ backgroundImage: `url(${bird1})`, color: "#ffffff" }}>
            <div className='container'>
                <div className="row g-0 p-2 py-md-4">
                    <div className="col-md-6">
                        <h2 style={{ color: "#ffffff", fontSize: "bold" }}>Get A <span className="text-style">Service Now!</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem earum cumque tempora blanditiis magnam! Quam sequi laudantifacere quibusdam quisquam illo eaque?</p>
                        <div>
                            <form onSubmit={handleCustomerService} className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input onBlur={handleBlur} type="email" className="form-control" name="email" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputText4" className="form-label">Person Name</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="person" id="inputText4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPhone4" className="form-label">Phone</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="phone" id="inputPhone4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputDate4" className="form-label">Reservation Date</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="date" id="inputDate4" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Service Name</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="service" id="inputAddress" placeholder="Pet House/ Pet Doctor....." />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-style">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className='py-4 px-md-4'>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <AppointmentCard title={"CUSTOMERS"} icon={<FontAwesomeIcon icon={faPaw} />} numb={"756"} pera={"Lelit. Sitaiores nulla optio ad minus molestiae totam magni!"} />
                                </div>
                                <div className="col-md-6">
                                    <AppointmentCard title={"PROFESSIONALS"} icon={<FontAwesomeIcon icon={faHeadset} />} numb={"756"} pera={"Lelit. Sitaiores nulla optio ad minus molestiae totam magni!"} />
                                </div>
                                <div className="col-md-6">
                                    <AppointmentCard title={"PRODUCTS"} icon={<FontAwesomeIcon icon={faAmbulance} />} numb={"756"} pera={"Lelit. Sitaiores nulla optio ad minus molestiae totam magni!"} />
                                </div>
                                <div className="col-md-6">
                                    <AppointmentCard title={"PET HOSTED"} icon={<FontAwesomeIcon icon={faClinicMedical} />} numb={"756"} pera={"Lelit. Sitaiores nulla optio ad minus molestiae totam magni!"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetAppointment;