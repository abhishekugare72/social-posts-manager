import { TiDeleteOutline } from "react-icons/ti";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList); // Get deletePost from context

  const handleDelete = () => {
    deletePost(post.id); // Call the delete function from context
  };

  return (
    <div className="card post-card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={handleDelete} // Trigger handleDelete on click
            style={{ cursor: "pointer" }}
          >
            <TiDeleteOutline />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary hashtags">
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-primary Liked-alert" role="alert">
        liked by {post.reactions} People
      </div>
    </div>
  );
};

export default Post;
