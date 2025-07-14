import React from "react";
import './book.css'
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {_id, image, title, author, rating } = book;
  //   const { image, title, author,publication_date,genre, rating  } = book;
  return (
    // <Link to={`/teachers/${_id}`} className="hover:tooltip hover:tooltip-open hover:tooltip-right" data-tip="Click for Details">
    <div className="card   shadow-xl book-cover">
      <figure className="parent">
        <img src={image} alt="book cover page" className="rounded-xl child" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="divider"></div>
        <h2 className="">Author: {author}</h2>
        <small>Rate: {rating}</small>
        <div className="card-actions">
          <button className="btn-primary btn">
          <Link to={`/books/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Book;
