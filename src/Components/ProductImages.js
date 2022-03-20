import React, { useState } from "react";
const ProductImages = ({ images }) => {
  const [number, setnumber] = useState(0);
  if (!images) {
    return <p>getting</p>;
  }
  const { url } = images[number];

  return (
    <section className="images-container">
      <img src={url} alt="main" className="main-img" />
      <div className="imgs-container">
        {images.map((image, index) => {
          const { id, url, filename } = image;
          return (
            <img
              src={url}
              alt={filename}
              key={id}
              className={number === index ? "img-small active" : "img-small"}
              onClick={() => setnumber(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
