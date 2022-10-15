import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const productsList = useSelector(state => state.products);
    const productsView = productsList.find(products => products.id === Number(id))
    const relatedProducts = productsList.filter(products => products.category.id === productsView.category.id)
    console.log(relatedProducts)

    return (
        <Row>
            <Col>
                <h1>{productsView?.title}</h1>

                <p>{productsView?.description}</p>
                <img className="img-fluid" src={productsView?.productImgs} alt="" />
            </Col>
            <Col lg={3}>
                <ListGroup variant="flush">
                    {
                        relatedProducts.map(products => (
                            <ListGroup.Item key={products.id}>
                                <Link to={`/product/${products.id}`}>
                                    <img src={products.productImgs} alt="" className="img-fluid" />
                                    {products.title}</Link>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Col>
        </Row>

    );
};

export default Product;
