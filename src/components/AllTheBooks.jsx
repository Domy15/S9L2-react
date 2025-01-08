import { Component } from 'react';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
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
                            <Card style={{ width: '18rem' }}>
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