import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Spinner from "../../../utils/Spinner";
import SEO from "../../SEO";

const BlogPresenter = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSpinner();
  }, []);

  const setSpinner = async () => {
    await setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <SEO title="Blog" description="Blog" content="Blog" />
      {isLoading ? (
        <div id="blog">
          <Spinner />
          <Container className="my-5" style={{ opacity: "0.2" }}>
            {children}
          </Container>
        </div>
      ) : (
        <div id="blog">
          <Container className="my-5">{children}</Container>
        </div>
      )}
    </>
  );
};

export default BlogPresenter;
