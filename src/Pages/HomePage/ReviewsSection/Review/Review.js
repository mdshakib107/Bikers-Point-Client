import React from 'react';
import ReactStars from "react-rating-stars-component";

const Product = ({ review }) => {
    const { name, email, rating, comments
    } = review;
    const firstExample = {
        size: 30,
        value: rating,
        edit: false
    };
    return (
        <div>
            <div className="col ">
                <div className="card p-4">
                    <div className="card-body py-1">
                        <h5 className="card-title fw-bold text-center">{name}</h5>
                        <h6 className="card-title text-center ">{email}</h6>
                        <p className=" text-center">{comments}</p>
                        <ReactStars {...firstExample} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;