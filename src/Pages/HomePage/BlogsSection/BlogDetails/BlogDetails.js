import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const { title, img, description } = blog;

    useEffect(() => {
        fetch(`https://radiant-island-49212.herokuapp.com/singleblog/${id}`)
            .then((res) => res.json())
            .then((idData) => setBlog(idData));
    }, [id]);
    return (
        <div className="m-5">

            <div className="mt-5">
                <Card className="container">
                    <Card.Img className="" variant="top" src={img} />
                    <Card.Body>
                        <Card.Text className="text-start">
                            <h4 className="card-title fw-bold">{title}</h4>

                            <p className="card-text">{description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default BlogDetails;