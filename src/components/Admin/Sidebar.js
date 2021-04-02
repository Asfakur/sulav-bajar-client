import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Nav className="d-flex flex-column p-3 bg-info rounded">
            
                <li className="p-3">
                    <Link to="/admin/manage">Manage Product</Link>
                </li>
                <li className="p-3">
                    <Link to="/admin/add">Add Product</Link>
                </li>
        
        </Nav>
    );
};

export default Sidebar;