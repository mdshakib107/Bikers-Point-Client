import axios from 'axios';
import { Button } from 'react-bootstrap';
const MyOrder = ({ orderProduct }) => {
    const { _id, img, price, name, status } = orderProduct;




    const handleDeletePackage = (id) => {
        const proceed = window.confirm('Are you sure for Canceling Booking?');
        if (proceed) {
            axios.delete(`http://localhost:5000/deleteProduct/${id}`)
                .then((result) => {
                    if (result.deletedCount) {
                        window.location.reload();
                    }
                    else {
                        window.location.reload();
                    }
                });
        }
    };
    return (
        <div>

            <div className="col">
                <div className="card cart text-start">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body py-1">
                        <h6 className="card-title fw-bold">{name}</h6>
                        <h6 className="card-title fw-bold text-danger">Best Price: {price}</h6>
                        <p className="card-title fw-bold text-dark text-end ">{status}</p>
                        <Button variant="danger mx-1 " onClick={() => handleDeletePackage(_id)} > Cancel Order  </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;