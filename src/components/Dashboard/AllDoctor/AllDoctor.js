import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../Shared/Loading/Loading';

const AllDoctor = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://powerful-spire-56228.herokuapp.com/allDoctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
            })
    }, []);


    const deletePD = (id) => {
        fetch(`https://powerful-spire-56228.herokuapp.com/allDoctors/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    console.log('delete product successfully')
                }
            })
        console.log(id)
    }


    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h2>All Doctors</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(doctor =>
                                <tr key={doctor._id}>
                                    <th scope="row">{doctor.index}</th>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td onClick={() => deletePD(doctor._id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                                </tr>)
                        }
                    </tbody>
                </table>
                {
                    doctors.length === 0 &&
                    <div style={{ height: '500px' }}>
                        <Loading></Loading>
                    </div>
                }
            </div>
        </section>

    );
};

export default AllDoctor;