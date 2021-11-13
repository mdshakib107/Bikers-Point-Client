import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id, title, srtText, img } = blog;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {srtText}
                    </Card.Text>
                    <Link to={`/blogDetails${_id}`}>
                        <Button variant="primary mx-1">Read More...</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;