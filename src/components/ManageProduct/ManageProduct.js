import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(products.length);

    const history = useHistory();
    
    //load data from backend
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [total])

    const handleDelete = (id) => {
        
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(data => {
                // console.log("res", data);
                if(data){
                    // alert(data.name +' deleted successfully');
                    setTotal(total - 1);
                    
                    
                }
                else{
                    alert('Unable to delete this product');
                }
            })
        
    }

    return (
        <div className="row">

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    products.map(product => <DeleteProduct product={product} key={product._id} handleDelete={handleDelete}></DeleteProduct>)
                }
            </table>
        </div>
    );
};

export default ManageProduct;