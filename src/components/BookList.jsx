import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  // state = {
  //   searchQuery: '',
  //   selectedBook: null,
  // }
  
  const [searchQuery, setSeatchQuesry] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    // this.setState({ selectedBook: book })
    setSelectedBook(book);
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSeatchQuesry(e.target.value)}
              // this.setState({ searchQuery: e.target.value })
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={6}>
          <Row className="g-2">
            {books
              .filter((b) =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((b) => (
                <Col xs={12} md={6} key={b.asin}>
                  <SingleBook
                    book={b}
                    onBookSelect={handleBookSelect}
                    isSelected={selectedBook && selectedBook.asin === b.asin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={6}>
          {selectedBook ? (
            <CommentArea asin={selectedBook.asin} />
          ) : (
            <p>Seleziona un libro per vedere i commenti</p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default BookList;
