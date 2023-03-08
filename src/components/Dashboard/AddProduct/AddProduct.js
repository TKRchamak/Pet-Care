import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {


    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('type', info.type);
        formData.append('pair', info.pair);
        formData.append('price', info.price);

        fetch('https://powerful-spire-56228.herokuapp.com/addProducts', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Product is Added')
                }
                    console.log(data)
                })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Product</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Product Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Product Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Type</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="type" placeholder="Cat / Dog / Bird" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Pair / Non-pair</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="pair" placeholder="Pair / non-pair" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;