import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavbarComponent from "./components/NavbarComponents";
import Product from "./components/Product";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState([]);
  const productDefaultValue = {
    name: "",
    category: "",
    price: "",
    imageURL: "",
  };
  const [newProduct, setNewProduct] = useState(productDefaultValue);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/product");
      if (res.data) setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/product", newProduct);
      fetchProducts();
      setNewProduct(productDefaultValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <NavbarComponent />
        <h1 className="display-1">Welcome to our E-Commerece App</h1>
        <p className="lead">
          Explore our wide range of products and give yourself a new look!
        </p>
        <Form
          onSubmit={createProduct}
          style={{ width: "20rem", margin: "10px auto" }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inverter AC"
              value={newProduct.name}
              onInput={(e) => {
                setNewProduct({
                  ...newProduct,
                  name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Appliances"
              value={newProduct.category}
              onInput={(e) => {
                setNewProduct({
                  ...newProduct,
                  category: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="1999.00"
              value={newProduct.price}
              onInput={(e) => {
                setNewProduct({
                  ...newProduct,
                  price: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://www.image.com"
              value={newProduct.imageURL}
              onInput={(e) => {
                setNewProduct({
                  ...newProduct,
                  imageURL: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Create New Product
          </Button>
        </Form>
        <Container>
          <Row>
            {products?.map((product) => (
              <Col md={4} key={product._id} style={{ marginTop: "5rem" }}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
