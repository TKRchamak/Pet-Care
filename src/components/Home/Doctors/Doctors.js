import React, { useEffect, useState } from 'react';
import './Doctors.css';

const Doctors = () => {


    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://powerful-spire-56228.herokuapp.com/allDoctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
            })
    }, []);

    return (
        <div className="bg-dark">
            <div className="container pb-5">
                <h2 style={{ color: "#ffffff", fontSize: "bold" }} className="p-3 text-center">Meet Our <span className="text-style">Veterinary Doctor</span> </h2>
                <div className="d-flex ">
                    {
                        doctors.map(doctor =>
                            <div style={{ backgroundImage: `url('data:image/png;base64, ${doctor.image.img}')` }} class="card crd-motion position-relative m-2" >
                                <div class="card-body position-absolute bottom-0 text-center">
                                    <h5 class="card-title">{doctor.name}</h5>
                                    <p class="card-text">Veterinary Doctor</p>
                                    <a href="#" class="btn btn-style">Contact us</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;