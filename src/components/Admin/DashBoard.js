import React from 'react';
import { Link, Route } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import Sidebar from './Sidebar';

const DashBoard = () => {
    return (
        <div className="container-fluid row">
            {/* <h1>Admin Dashboard</h1> */}

            {/* <div className=""> */}
                <div className="col-sm-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-sm-7">
                    <Route path="/admin/manage" component={ManageProduct}></Route>
                    <Route path="/admin/add" component={AddProduct}></Route>
                </div>
            {/* </div> */}



        </div>
    );
};

export default DashBoard;