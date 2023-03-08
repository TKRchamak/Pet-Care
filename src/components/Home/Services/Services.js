import React from 'react';
import cat1 from '../../../Images/photo-1494256997604-768d1f608cac.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div style={{ backgroundColor: '#262626' }}>
            <div className="row pt-5 pb-5">
                <div className="col-md-6 pt-5 mt-5">
                    <img style={{ width: "100%" }} src={cat1} alt="" />
                </div>
                <div className="col-md-5">
                    <div className="container pt-4">
                        <h2 className="text-center" style={{ color: '#ffffff' }}>Why <span className="text-style">Choose Use</span> </h2>
                        <div className="container overflow-hidden pt-4">
                            <div className="row gy-5">
                                <div className="col-6 ">
                                    <div className="p-3 border bg-light rounded">
                                        <div className="row">
                                            <div className="col-3 d-flex align-items-center">
                                                <p style={{ fontSize: "40px" }}><FontAwesomeIcon icon={faPaw} /></p>
                                            </div>
                                            <div className="col-9">
                                                <h5>BEST IN INDUSTRY</h5>
                                                <p>Lelit. Sitaiores nulla optio ad minus molestiae totam magni!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light rounded">
                                        <div className="row">
                                            <div className="col-3 d-flex align-items-center">
                                                <p style={{ fontSize: "40px" }}><FontAwesomeIcon icon={faHeadset} /></p>
                                            </div>
                                            <div className="col-9">
                                                <h5>CUSTOMER SUPPORT</h5>
                                                <p>Lelit. Sitaiores nulla optio ad minus molestiae totam magni!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light rounded">
                                        <div className="row">
                                            <div className="col-3 d-flex align-items-center">
                                                <p style={{ fontSize: "40px" }}><FontAwesomeIcon icon={faAmbulance} /></p>
                                            </div>
                                            <div className="col-9">
                                                <h5>EMERGENCY SERVICES</h5>
                                                <p>Lelit. Sitaiores nulla optio ad minus molestiae totam magni!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light rounded">
                                        <div className="row">
                                            <div className="col-3 d-flex align-items-center">
                                                <p style={{ fontSize: "40px" }}><FontAwesomeIcon icon={faClinicMedical} /></p>
                                            </div>
                                            <div className="col-9">
                                                <h5>VETERINARY HELP</h5>
                                                <p>Lelit. Sitaiores nulla optio ad minus molestiae totam magni!</p>
                                            </div>
                                        </div>
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

export default Services;