import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <nav className="nav navbar navbar-dark bg-primary">
                <ul>

                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to="/orders">Orders</Link>

                    </li>

                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/login">{loggedInUser.email ? loggedInUser.name : 'Login'}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;