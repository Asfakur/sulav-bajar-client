import React from 'react';
import { useHistory } from 'react-router';

const Product = ({ product }) => {

    const history = useHistory()

    const handleBuyProduct = () => {
        
        history.push(`/product/${product._id}`);
        
    }
    return (
        <div className="col-md-4 bg-white">
            <div className="rounded m-3 bg-info rounded pb-5 p-3">

                <div>
                    <div className="text-center">
                        <img className="rounded " style={{ height: '300px', width: '350px' }} src={product.img} alt="" />
                    </div>
                    <h3>{product.name}</h3>
                    <div>
                        <h3 className="float-left text-white">$ {product.price}</h3>
                        <button className="btn btn-warning float-right" onClick={() => handleBuyProduct(product)}>Bye Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;