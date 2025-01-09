import { Component } from "react";
import SingleBook from "./SingleBook";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  state = {
    title: "",
  };
  render() {
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.title.toLowerCase())
    );
    return (
      <Row className="justify-content-evenly">
        <Form>
          <Form.Group className="mt-3 mb-5 mx-4">
            <Form.Control
              value={this.state.title}
              type="text"
              placeholder="Search"
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </Form.Group>
        </Form>
        {filteredBooks.map((book) => {
          return <SingleBook book={book} key={book.asin} />;
        })}
      </Row>
    );
  }
}

export default BookList;
