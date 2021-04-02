import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm(); //React Hook Form destructuring 

    const [imageURL, setImageURL] = useState();

    const onSubmit = formData => {
        const productData = {
            name: formData.productName,
            price: formData.price,
            weight: formData.weight,
            img: imageURL //from useState       
        }

        //send to back end
        const url = 'http://localhost:5000/addProduct';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        // .then(res => console.log('server side response', res));
        .then(res => {
            if(res.ok){
                alert(productData.name + ' added successfully to database');
            }
            else{
                alert(productData.name + ' product not added. Please try again');
            }
        });

    };
    

    const handleImageUpload = event => {
        // console.log(event.target.files[0]);

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
                // if(isSuccess){
                //     setImageURL(imgURL);
                //     alert('image upload complete');
                //     console.log(isSuccess);
                // }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Add Product Component</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Product Name</p>
                <input name="productName" type="text" ref={register} />
                <br />

                <p>Add Price</p>
                <input name="price" type="text" ref={register} />
                <br />

                <p>Weight</p>
                <input name="weight" type="text" ref={register} />
                <br />

                <br />
                <input name="img" type="file" onChange={handleImageUpload} />
                <br />
                <br />

                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;