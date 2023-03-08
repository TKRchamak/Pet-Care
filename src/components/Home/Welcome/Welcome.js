import React from 'react';
import img1 from '../../../Images/photo-1517101724602-c257fe568157.jpg';
import img2 from '../../../Images/photo-1559085013-6b2b49a4cf91.jpg';
import img3 from '../../../Images/photo-1560813562-fd09315f5ce8.jpg';

const Welcome = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row g-0 justify-content-center py-1 py-md-5">
                    <div style={{ color: '#ffffff' }} className="col-12 col-md-7">
                        <div className='p-2 p-md-0 pe-md-5'>
                            <h2 className="text-bold">WELCOME TO <span className="text-style">PETCARE</span> </h2>
                            <p className="mb-4 text-justify">
                                Proper animal care involves meeting the basic needs of an animal such as food, water, shelter, and veterinary care.
                                Regular exercise and mental stimulation are also important components of animal care to ensure good physical and mental health.
                                Animals should be treated with respect and kindness, and never subjected to physical or emotional abuse.
                                Regular grooming, including bathing and brushing, can help keep an animal healthy and comfortable.
                                It's important to be aware of an animal's behavior and body language to detect any signs of illness or distress.
                                Finally, responsible pet ownership involves being informed about local laws and regulations, licensing your pet, and preventing your pet from becoming a nuisance to others in the community.
                            </p>
                            <div className='d-flex justify-content-center mb-3'>
                                <button className="btn btn-style"> Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="row g-0 pb-2">
                            <img className='rounded-3' src={img1} alt="" />
                        </div>
                        <div className="d-flex">
                            <div className="col me-1 pb-2 rounded-3">
                                <img className='rounded-3 w-100 h-100' src={img2} alt="" />
                            </div>
                            <div className="col ms-1 pb-2 rounded-3">
                                <img className='rounded-3 w-100 h-100' src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;