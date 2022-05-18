import Image from "next/image";
import { forwardRef } from "react";

import { urlFor } from "../lib/sanity";
import Tag from "./Tag";

export default forwardRef(function Card({ onClick, href, post }, ref) {
  // destructure 'post' object
  const { title, publishedAt, mainImage, username, authorImage, categories } =
    post;

  const mainImageSrc = urlFor(mainImage).url(); // without .url() it's not working with <Image /> NextJS component
  const authorImageSrc = urlFor(authorImage); // without .url() it's not working with <Image /> NextJS component

  // console.log(mainImageSrc);
  return (
    <div className="card-container" href={href} onClick={onClick} ref={ref}>
      <h2>{title}</h2>
      <p>Published on: {new Date(publishedAt).toDateString()}</p>
      <img src={mainImageSrc} className="main-image" alt={title + " image"} />

      <hr />

      <div className="info-container">
        <p>Posted by: {username}</p>
        <img
          src={authorImageSrc}
          className="avatar"
          alt={username + " avatar"}
        />
      </div>

      <div className="tag-container">
        {categories.map((category) => (
          <>{category && <Tag key={category.id} title={category.title} />}</>
        ))}
      </div>
    </div>
  );
});
