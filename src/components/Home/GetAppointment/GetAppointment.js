import React, { useState } from 'react';
import bird1 from '../../../Images/photo-1506220926022-cc5c12acdb35.jpg';
import './GetAppointment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { indexOf } from 'lodash';

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
            body: JSON.stringify({email: info.email, address: info.address, date: info.date, phone: info.phone, service: info.service})
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
            <div className="row centeraized">
                <div className="col-md-6">
                    <div className="container">
                        <h2 style={{ color: "#ffffff", fontSize: "bold" }}>Get A <span className="text-style">Service Now!</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem earum cumque tempora blanditiis magnam! Quam sequi laudantifacere quibusdam quisquam illo eaque?</p>
                        <div>
                            <form onSubmit={handleCustomerService} class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input onBlur={handleBlur} type="email" class="form-control" name="email" id="inputEmail4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputText4" class="form-label">Person Name</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="person" id="inputText4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPhone4" class="form-label">Phone</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="phone" id="inputPhone4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputDate4" class="form-label">Reservation Date</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="date" id="inputDate4" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Service Name</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="service" id="inputAddress" placeholder="Pet House/ Pet Doctor....." />
                                </div>
                                <div class="col-12">
                                    <button  type="submit" class="btn btn-style">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="container pt-4">
                        <div class="container overflow-hidden pt-4">
                            <div class="row gy-5">
                                <div class="col-6 ">
                                    <div class="p-3 rounded text-center">
                                        <p style={{ fontSize: "40px" }}><FontAwesomeIcon icon={faPaw} /></p>
                                        <h3 className="text-style"> 756</h3>
                                        <h6 style={{fontSize:"bold"}}>CUSTOMERS</h6>
                                        <p>Lelit. Sitaiores nulla optio ad minus molestiae totam magni!</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="p-3 rounded text-center">
                                        <p style={{ fontSize: "40px" }}><FontAwesomeIcon icon={faHeadset} /></p>
                                        <h3 className="text-style"> 756</h3>
                                        <h6 style={{fontSize:"bold"}}>PROFESSIONALS</h6>
                                        <p>Lelit. Sitaiores nulla optio ad minus molestiae totam magni!</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="p-3 rounded text-center">
                                        <p style={{ fontSize: "40px" }}><FontAwesomeIcon icon={faAmbulance} /></p>
                                        <h3 className="text-style"> 756</h3>
                                        <h6 style={{fontSize:"bold"}}>PRODUCTS</h6>
                                        <p>Lelit. Sitaiores nulla optio ad minus molestiae totam magni!</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="p-3 rounded text-center">
                                        <p style={{ fontSize: "40px" }}><FontAwesomeIcon icon={faClinicMedical} /></p>
                                        <h3 className="text-style"> 756</h3>
                                        <h6 style={{fontSize:"bold"}}>PET HOSTED</h6>
                                        <p>Lelit. Sitaiores nulla optio ad minus molestiae totam magni!</p>
                                    </div>
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