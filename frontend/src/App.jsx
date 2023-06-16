import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

// <Router>
// <Header />

// <main className="py-3">
//   <Container>
//     <Route path="/" Component={<HomeScreen/>}/>
//   </Container>
// </main>

// <Footer />
// </Router>
