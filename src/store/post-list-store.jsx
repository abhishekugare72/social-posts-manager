import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: " Hi friends, I'm going to Mumbai for my vacation, hope enjoying, peace out!",
    reactions: 27,
    userId: "user_01",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Be Pass",
    body: " Hi friends, I'm going to Mumbai for my vacation, hope enjoying, peace out!",
    reactions: 79,
    userId: "user_02",
    tags: ["College", "Engineering", "kick"],
  },
];

const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.post, ...currentPostList];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.id);
    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (newPost) => {
    dispatchPostList({ type: "ADD_POST", post: newPost });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", id: postId });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
