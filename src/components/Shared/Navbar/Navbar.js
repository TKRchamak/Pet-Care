import React, { useContext } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const token = sessionStorage.getItem('token');

    const handleLogOut = () => {
        sessionStorage.clear();
        setLoggedInUser({});
    }
    const activeStyle = {
        color: "white",
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
            <div className="container-fluid">
                <div className="navbar-brand">

                    <NavLink className='text-style' to="/">
                        <h1 className="text-center m-0" style={{ fontSize: "1.5em" }} >Pet <FontAwesomeIcon icon={faPaw} /> Care</h1>
                    </NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact className={"nav-link ms-3"} activeStyle={activeStyle} to={"/"} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className={"nav-link ms-3"} activeStyle={activeStyle} to={"/products"} >Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className={"nav-link ms-3"} activeStyle={activeStyle} to={"/dashboard"} >Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className={"nav-link ms-3"} activeStyle={activeStyle} to={"/admin"} >Admin</NavLink>
                        </li>

                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}

                        {/* <a className="nav-link ms-3" href="/dashboard"><FontAwesomeIcon icon={faCartArrowDown} /></a> */}
                        {
                            loggedInUser.name || token ? <a className="nav-link ms-3 btn btn-style" onClick={handleLogOut} href="/">Log Out</a>
                                : <a className="nav-link ms-3 btn btn-style" href="/login">Login</a>
                        }
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;