import React from "react";
import SEO from "../../SEO";
import BlogData from "../data/BlogData";
import BlogPresenter from "../data/BlogPresenter";

const Blog = ({ data }) => {
  return (
    <>
    <BlogPresenter>
      <BlogData data={data} />
    </BlogPresenter>
    </>
  );
};

export default Blog;
