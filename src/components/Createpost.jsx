import { useState, useContext } from "react";
import { PostList } from "../store/post-list-store"; // Import the context

const Createpost = () => {
  const { addPost } = useContext(PostList); // Access addPost from context
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      title,
      body,
      reactions: 0, // Default reactions to 0
      tags: tags.split(",").map((tag) => tag.trim()), // Split tags by comma
    };

    addPost(newPost); // Add new post to the list

    // Clear form fields after submission
    setTitle("");
    setBody("");
    setTags("");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="title">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter post title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="title">
          Post Content
        </label>
        <textarea
          rows="3"
          className="form-control"
          id="body"
          placeholder="Enter more about it"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="title">
          Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="#like...etc"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Createpost;
