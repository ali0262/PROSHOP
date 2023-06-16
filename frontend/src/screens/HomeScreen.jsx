import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Col, Container, Row } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <main className="py-3">
      <Container>
        <h1>latest products</h1>
        <Row>
          {products.map((product) => {
            const { _id } = product;
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={_id}>
                <Product {...product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default HomeScreen;
