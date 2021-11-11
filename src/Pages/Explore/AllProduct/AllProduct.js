import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = ({ product }) => {
    const { _id, img, price, name } = product;

    return (
        <div>
            <div className="col ">
                <div className="card cart text-start ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body py-1">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <h6 className="card-title fw-bold text-danger ">Best Price: {price}</h6>
                        <Link to={`/purchase${_id}`}>
                            <Button variant="success mx-1 text-end"> Book Now </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;