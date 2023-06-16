import {useState,useEffect} from "react";

import Product from "../components/Product";
import { Col, Container, Row } from "react-bootstrap";

import axios from 'axios';

const HomeScreen = () => {

  const [products, setProducts] = useState([])


  const fetchProducts = async ()=>{
    try {
      const {data} = await axios.get('/api/products');
     setProducts(data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
      fetchProducts()
  },[])

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
