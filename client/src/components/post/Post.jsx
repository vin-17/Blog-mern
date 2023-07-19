import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {/* if post has image then show image */}
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

        {/* title */}
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        {/* date */}
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      
      {/* description */}
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
