import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, onBookSelect, isSelected }) => {
  return (
    <>
      <Card
        className="h-100"
        onClick={() => onBookSelect(book)}
        style={{ border: isSelected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
        <Card.Footer>{book.price}€</Card.Footer>
      </Card>
    </>
  );
};

export default SingleBook;
