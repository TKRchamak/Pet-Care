import React from 'react';
import bird1 from '../../../Images/photo-1506220926022-cc5c12acdb35.jpg';
import './GetAppointment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const GetAppointment = () => {
    return (
        <div className="appointmentStyle" style={{ backgroundImage: `url(${bird1})`, color: "#ffffff" }}>
            <div className="row centeraized">
                <div className="col-md-6">
                    <div className="container">
                        <h2 style={{ color: "#ffffff", fontSize: "bold" }}>Get A <span className="text-style">Service Now!</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem earum cumque tempora blanditiis magnam! Quam sequi laudantifacere quibusdam quisquam illo eaque?</p>
                        <div>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPhone4" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="inputPhone4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputDate4" class="form-label">Reservation Date</label>
                                    <input type="text" class="form-control" id="inputDate4" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-style">Sign in</button>
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