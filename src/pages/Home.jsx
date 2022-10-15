import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();
    const productsList = useSelector((state) => state.products);
    const [categories, setCategories] = useState([]);
    const [ProductsFiltered, setProductsFiltered] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then((res) => setCategories(res.data.data.categories))
    }, [])
    useEffect(() => {
        setProductsFiltered(productsList);
    }, [productsList])

    const filterCategory = (categoryId) => {
        const filtered = productsList.filter((products) =>
            products.category.id === categoryId
        )
        setProductsFiltered(filtered);
    }

    const searchProducts = () => {
        alert(searchValue)
        const filtered = ProductsFiltered.filter(
            products => products.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        setProductsFiltered(filtered)
        console.log(filtered)
    }


    return (
        <Row>
            <Col lg={3}>
                <ListGroup >
                    {categories.map((category) => (
                        <ListGroup.Item
                            key={category.id}
                            onClick={() => filterCategory(category.id)}
                            style={{ cursor: "pointer" }}
                        >
                            {category.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Products"
                        onChange={e => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                    <Button variant="outline-secondary" onClick={searchProducts}>
                        Button
                    </Button>
                </InputGroup>
                <Row xs={1} md={2} xl={3} className="g-4">
                    {ProductsFiltered.map(products => (
                        <Col key={products.id}>
                            <Card onClick={() => navigate(`/Product/${products.id} `)} style={{height: "100%"}}>

                            <Card.Img variant="top" src={products.productImgs} style={{maxWidth: "100px"}}/>
                            <Card.Body>
                                <Card.Title>{products.title}</Card.Title>
                                <Card.Text>
                                    {products.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
      ))}
                </Row>
                
            </Col >
        </Row >

    );
};

export default Home;