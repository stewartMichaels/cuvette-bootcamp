import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({ product }) {
  const styles = {
    image: {
      width: "6rem",
      height: "7rem",
      display: "block",
      margin: "10px auto",
    },
  };

  return (
    <Card style={{ width: "18rem", height: "22rem" }}>
      <Card.Img variant="top" src={product.imageURL} style={styles.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning" style={{ marginRight: "1rem" }}>
          Edit
        </Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
