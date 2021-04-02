import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm(); //React Hook Form destructuring 

    const [imageURL, setImageURL] = useState();

    let history = useHistory();

    const onSubmit = formData => {
        const productData = {
            name: formData.productName,
            price: formData.price,
            weight: formData.weight,
            img: imageURL //from useState       
        }

        //send to back end
        const url = 'https://radiant-hamlet-99889.herokuapp.com/addProduct';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => {
            if(res.ok){
                // <Redirect to="/orders" />
                alert(productData.name + ' added successfully to database');
                history.push("/home");
            }
            else{
                alert(productData.name + ' product not added. Please try again');
            }
        });

    };
    
    const handleImageUpload = event => {

        const imageData = new FormData();
        imageData.set('key', 'a0df80bb39236cc860e662c5acb1ab7c');
        imageData.append('image', event.target.files[0]);

        const axios = require('axios');

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {                
                let isSuccess = response.data.success;
                
                const imgURL = response.data.data.display_url;
                setImageURL(imgURL);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="border border-dark p-3 rounded bg-light">
            <h1>Add Product Component</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Product Name</p>
                <input name="productName" type="text" ref={register} />
                <br/>
                <br />
                <input name="img" type="file" onChange={handleImageUpload} />
                <br />
                <br />

                <p>Add Price</p>
                <input name="price" type="text" ref={register} />
                <br/>
                <br />

                <p>Weight</p>
                <input name="weight" type="text" ref={register} placeholder="Weight with unit" />
                <br />
                <br />             
                <input type="submit" value="Add Product" className="btn btn-success" />
            </form>
        </div>
    );
};

export default AddProduct;