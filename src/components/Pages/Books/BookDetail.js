import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetail = () => {
  const books = useLoaderData();
  const { title, author, publication_date, description, genre, dlink, image } =
    books;
  return (
    <div
      className="h-full w-full overflow-x-hidden bg-cover bg-no-repeat"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-screen items-center justify-center">
        <div className="text-black">
          <h2 className="text-4xl">{title}</h2>
          <h2 className="text-3xl text-black">{author}</h2>
          <h2>{publication_date}</h2>
          <h2>{description}</h2>
          <h2>{genre}</h2>
        </div>
        <button className="btn-accent btn">
          <a href={dlink}>download</a>
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
