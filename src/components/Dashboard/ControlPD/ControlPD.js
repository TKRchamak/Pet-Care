import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../Shared/Loading/Loading';

const ControlPD = () => {
    const [pds, setPds] = useState([])
    useEffect(() => {
        fetch('https://powerful-spire-56228.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setPds(data);
                console.log(data)
            })
    }, []);


    const deletePD = (id) => {
        fetch(`https://powerful-spire-56228.herokuapp.com/allProducts/${id}`, {
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
                <h2>All Products</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pds.map(pd =>
                            <tr >
                                <th key={pd._id} scope="row">{pd.index}</th>
                                <td>{pd.name}</td>
                                <td>{pd.type}</td>
                                <td>{pd.pair}</td>
                                <td onClick={() => deletePD(pd._id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    pds.length === 0 &&
                    <div style={{ height: '500px' }}>
                        <Loading></Loading>
                    </div>
                }
            </div>
        </section>

    );
};

export default ControlPD;