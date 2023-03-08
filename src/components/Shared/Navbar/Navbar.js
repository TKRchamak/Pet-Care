import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const token = sessionStorage.getItem('token');

    const handleLogOut = () => {
        sessionStorage.clear();

    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <h1 className="navbar-brand" style={{ fontSize: "35px" }} href="/">Pet <FontAwesomeIcon icon={faPaw} /> Care</h1>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link ms-3" href="/">Home</a>
                            <a className="nav-link ms-3" href="/products">Products</a>
                            <a className="nav-link ms-3" href="/dashboard">Dashboard</a>
                            <a className="nav-link ms-3" href="/admin">Admin</a>
                            {/* <a className="nav-link ms-3" href="/dashboard"><FontAwesomeIcon icon={faCartArrowDown} /></a> */}
                            {
                                loggedInUser.name || token ? <a className="nav-link ms-3 btn btn-style" onClick={handleLogOut} href="/">Log Out</a>
                                    : <a className="nav-link ms-3 btn btn-style" href="/login">Login</a>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;