import { Component } from 'react';
import scifi from '../data/scifi.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class ShowBooks extends Component {
    render() {       
        return (
            <Row className='justify-content-evenly'>
                {
                    scifi.map((book) => {
                        return (
                            <Card style={{ width: '18rem' }} key={scifi.asin}>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        {book.price}
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Row>
        )
    }
}

export default ShowBooks