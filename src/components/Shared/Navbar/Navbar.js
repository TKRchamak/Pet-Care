import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const token = sessionStorage.getItem('token');

    const handleLogOut = () => {
        sessionStorage.clear();

    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link ms-3" href="/">Home</a>
                            <a class="nav-link ms-3" href="/products">Products</a>
                            <a class="nav-link ms-3" href="/dashboard">Dashboard</a>
                            <a class="nav-link ms-3" href="/admin">Admin</a>
                            <a class="nav-link ms-3" href="/dashboard"><FontAwesomeIcon icon={faCartArrowDown} /></a>
                            {
                                loggedInUser.name || token ? <a class="nav-link ms-3 btn btn-style" onClick={handleLogOut} href="/">Log Out</a>
                                    : <a class="nav-link ms-3 btn btn-style" href="/login">Login</a>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;