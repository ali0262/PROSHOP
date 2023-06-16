import React from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { Link, useParams } from "react-router-dom";

const ProductScreen = () => {
  const { id } = useParams();

  const product = products.find((product) => product._id === id);
  const {
    _id,
    name,
    description,
    countInStock,
    image,
    price,
    rating,
    brand,
    numReviews,
  } = product;

  return (
    <main className="py-3">
      <Container>
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>

        <Row>
          <Col md={6}>
            <Image src={image} alt={name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating value={rating} text={`${numReviews} reviews`} />
              </ListGroup.Item>

              <ListGroup.Item>
                    price: ${price}
              </ListGroup.Item>
              <ListGroup.Item>
                    Description: {description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
                <ListGroup variant="flush">

                <ListGroup.Item>
                        <Row>
                            <Col>
                                Price :
                            </Col>

                            <Col>
                                <strong>
                                    $ {price}
                                </strong>
                            </Col>
                        </Row>
              </ListGroup.Item>


              <ListGroup.Item>
                        <Row>
                            <Col>
                                Status :
                            </Col>

                            <Col>

                                     {countInStock ? 'In Stock' : 'Out of Stock' }
   
                            </Col>
                        </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                        <Button disabled={countInStock === 0} className="btn-block" type="button">Add To Cart</Button>
              </ListGroup.Item>

                </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProductScreen;
