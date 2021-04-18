import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import './ProDetail.css'


const ProDetail = () => {

    const [pds, setPds] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => {
                setPds(data);
                console.log(data)
            })
    }, []);


    console.log(pds)

    return (

        <div className="proStyle p-5">
            {
                pds.length ===0 && 
                <div style={{height:'500px'}}>
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
                            <p>Pare: {pd.pair}</p>
                            <p>Price: ${pd.price}</p>
                            <button className="btn btn-style">Add to card</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProDetail;