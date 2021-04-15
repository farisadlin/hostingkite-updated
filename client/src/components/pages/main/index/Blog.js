import React from "react";
import BlogData from "../data/BlogData";
import BlogPresenter from "../data/BlogPresenter";

const Blog = ({ data }) => {
  return (
    <BlogPresenter>
      <BlogData data={data} />
    </BlogPresenter>
  );
};

export default Blog;
