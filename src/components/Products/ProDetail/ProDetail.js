import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Loading from '../../Shared/Loading/Loading';
import './ProDetail.css'


const ProDetail = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    const [pds, setPds] = useState([])
    useEffect(() => {
        fetch('https://powerful-spire-56228.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setPds(data);
            })
    }, []);

    const HandleAddPd = (pd) => {
        const data = {};
        data.id = pd._id;
        data.name = pd.name;
        data.type = pd.type;
        data.price = pd.price;
        data.email = loggedInUser.email;
        console.log(data)
        fetch('https://powerful-spire-56228.herokuapp.com/addCustomer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // alert('Customer is Login')
                }
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (

        <div className="proStyle p-5">
            {
                pds.length === 0 &&
                <div style={{ height: '500px' }}>
                    <Loading></Loading>
                </div>
            }
            {
                pds.map(pd =>
                    <div className="row p-5 itemStyle" key={pd._id}>
                        <div className="col-md-5">
                            <img style={{ height: "250px" }} src={`data:image/png;base64, ${pd.image.img}`} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h3>{pd.name}</h3>
                            <p>type: {pd.type}</p>
                            <p>Pair: {pd.pair}</p>
                            <p>Price: ${pd.price}</p>
                            <button onClick={() => HandleAddPd(pd)} className="btn btn-style">Add to card</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProDetail;