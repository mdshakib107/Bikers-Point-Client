import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banar = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/8xJ1CK0/2.png"
                        alt="First slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banar;