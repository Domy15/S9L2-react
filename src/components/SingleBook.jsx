import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    const isSelcted = this.state.selected;
    return (
      <>
        {isSelcted ? (
          <Card
            style={{ width: "18rem", border: "3px solid blue" }}
            onClick={() => {
              this.setState({ selected: true });
            }}
          >
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.price}</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        ) : (
          <Card
            style={{ width: "18rem" }}
            onClick={() => {
              this.setState({ selected: true });
            }}
          >
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.price}</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }
}

export default SingleBook;
