import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orderProduct, setOrderProduct] = useState([]);
    const { user } = useAuth();

    // // console.log(user.email)
    // // console.log(isDelete)
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrderProduct(data));
    }, [user.email])
    return (
        <div>

            <div className="">
                <h1 className="p-4" >Hello <span className="text-warning"> {user.displayName}</span> </h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                        {
                            orderProduct.map(orderProduct =>
                                <MyOrder
                                    key={orderProduct._id}
                                    orderProduct={orderProduct}
                                ></MyOrder>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;