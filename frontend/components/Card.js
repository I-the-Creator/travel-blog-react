import Image from "next/image";
import { urlFor } from "../lib/sanity";

const Card = ({ post }) => {

    const mainImageSrc = urlFor(post.mainImage)
    const authorImageSrc = urlFor(post.authorImage)

    console.log(mainImageSrc);
  return (
    <div className="card-container">
      <h2>{post.title}</h2>
      <p>Published on: {new Date(post.publishedAt).toDateString()}</p>
      <img
        src={mainImageSrc}
        className="main-image"
        alt={post.title + " image"}
      />

      <hr/>

      <div className="info-container">
        <p>Posted by: {post.userName}</p>
        <img
            src={authorImageSrc}
            className="avatar"
            alt={post.username + ' avatar'}
        />
      </div>

      <div className="tag-container">
          {/* {post.categories.map(category => (
              <Tag key={category.id} title={category.title}/>
          ))} */}
      </div>
    </div>
  );
};

export default Card;
