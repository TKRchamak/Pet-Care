import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Loading from '../../Shared/Loading/Loading';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [customers, setCustomers] = useState([])

    const email = loggedInUser.email;
    console.log(email)

    useEffect(() => {
        fetch(`https://powerful-spire-56228.herokuapp.com/allCustomer/${email}`)
            .then(res => res.json())
            .then(data => {
                setCustomers(data);
                console.log(data);
            })
    }, [])

    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h2>All customers</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Email</th>
                            <th scope="col">ID</th>
                            <th scope="col">Service</th>
                            {/* <th scope="col">Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer =>
                                <tr key={customer._id}>
                                    <th scope="row">{customer.index}</th>
                                    <td>{customer.data.email}</td>
                                    <td>{customer._id}</td>
                                    <td>{customer.data.service}</td>
                                    {/* <td onClick={() => deletePD(customer._id)}><FontAwesomeIcon icon={faTrashAlt} /></td> */}
                                </tr>)
                        }
                    </tbody>
                </table>
                {
                    customers.length === 0 &&
                    <div style={{ height: '500px' }}>
                        <Loading></Loading>
                    </div>
                }
            </div>
        </section>
    );
};

export default Dashboard;