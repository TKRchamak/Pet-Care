import React, { useContext } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const token = sessionStorage.getItem('token');

    const handleLogOut = () => {
        sessionStorage.clear();
        setLoggedInUser({});
    }


    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
            <div class="container-fluid">
                <div className="navbar-brand">
                    <h1 className="text-center m-0" style={{ fontSize: "1.5em" }} href="/">Pet <FontAwesomeIcon icon={faPaw} /> Care</h1>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a className="nav-link ms-3 active" href="/">Home</a>
                        </li>

                        <li class="nav-item">
                            <a className="nav-link ms-3" href="/products">Products</a>
                        </li>

                        <li class="nav-item">
                            <a className="nav-link ms-3" href="/dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link ms-3" href="/admin">Admin</a>
                        </li>

                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}

                        {/* <a className="nav-link ms-3" href="/dashboard"><FontAwesomeIcon icon={faCartArrowDown} /></a> */}
                        {
                            loggedInUser.name || token ? <a className="nav-link ms-3 btn btn-style" onClick={handleLogOut} href="/">Log Out</a>
                                : <a className="nav-link ms-3 btn btn-style" href="/login">Login</a>
                        }
                    </ul>
                    {/* <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;