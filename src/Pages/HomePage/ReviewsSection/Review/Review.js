import React from 'react';
import ReactStars from "react-rating-stars-component";

const Product = ({ review }) => {
    const { name, email, rating } = review;
    const firstExample = {
        size: 30,
        value: rating,
        edit: false
    };
    return (
        <div>
            <div className="col ">
                <div className="card cart text-start ">
                    {/* <img src={user.} className="card-img-top" alt="..." /> */}
                    <div className="card-body py-1">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <h6 className="card-title fw-bold text-danger ">Best Price: {email}</h6>
                        <ReactStars {...firstExample} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;