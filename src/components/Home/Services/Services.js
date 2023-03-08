import React from 'react';
import cat1 from '../../../Images/photo-1494256997604-768d1f608cac.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import ChooseUsCard from '../../Shared/ChooseUsCard/ChooseUsCard';

const Services = () => {
    return (
        <div style={{ backgroundColor: '#262626' }}>
            <div className="row g-0 p-3 py-md-5">
                <div className="col-md-6 d-flex justify-content-center">
                    <img className='w-100 rounded-end' src={cat1} alt="" />
                </div>

                <div className="col-md-6">
                    <div className="px-md-4">
                        <h2 className="text-center my-4" style={{ color: '#ffffff' }}>
                            Why <span className="text-style">Choose Use</span>
                        </h2>

                        <div className="row g-3">
                            <div className="col-md-6 ">
                                <ChooseUsCard title="BEST IN INDUSTRY" icon={<FontAwesomeIcon icon={faPaw} />} pera="Lelit. Sitaiores nulla optio ad minus molestiae totam magni!" />
                            </div>
                            <div className="col-md-6">
                                <ChooseUsCard title="CUSTOMER SUPPORT" icon={<FontAwesomeIcon icon={faHeadset} />} pera="Lelit. Sitaiores nulla optio ad minus molestiae totam magni!" />
                            </div>
                            <div className="col-md-6">
                                <ChooseUsCard title="EMERGENCY SERVICES" icon={<FontAwesomeIcon icon={faAmbulance} />} pera="Lelit. Sitaiores nulla optio ad minus molestiae totam magni!" />
                            </div>
                            <div className="col-md-6">
                                <ChooseUsCard title="VETERINARY HELP" icon={<FontAwesomeIcon icon={faClinicMedical} />} pera="Lelit. Sitaiores nulla optio ad minus molestiae totam magni!" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;