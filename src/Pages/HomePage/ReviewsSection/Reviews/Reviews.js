import React, { useEffect, useState } from 'react';
import Review from '../Review/Review'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://radiant-island-49212.herokuapp.com/allreview')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <div className="">
                <h3 className="fs-3 fw-bold text-uppercase  text-dark p-5" >Our products </h3>
                {
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                            {
                                reviews.map(review =>

                                    <Review
                                        key={review._id}
                                        review={review}
                                    ></Review>
                                )
                            }
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Reviews;