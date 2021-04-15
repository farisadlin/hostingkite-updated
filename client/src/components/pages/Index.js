import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

import "../assets/css/index.scss";

import Login from "./forms/index/Login";
import Register from "./forms/index/Register";
import Contact from "./forms/index/Contact";

import Navbar from "./main/index/Navbar";
import Footer from "./main/index/Footer";
import Home from "./main/index/Home";
import Services from "./main/index/Services";
import Testimonial from "./main/index/Testimonial";
import Price from "./main/index/Price";
import Blog from "./main/index/Blog";
import Help from "./main/index/Help";

const LandingPage = () => {
  const [newDataRest, setNewDataRest] = useState({
    help: [],
    customer: [],
    blog: [],
    loading: true,
  });

  const [newDataGraphql, setNewDataGraphql] = useState({
    price: [],
    services: [],
    testimonial: [],
    loading: true,
  });

  const GRAPHQL_URL = "http://localhost:9000/";

  /**
   * * APOLLO GRAPHQL API
   */

  const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

  const getGraphQL = async () =>
    await client
      .query({
        query: gql`
          query {
            price {
              id
              hosting_type
              price
              duration
              capacity_space
              capacity_type
              bandwidth_capacity
              bandwidth_type
              website_capacity
              website_type
              email_capacity
              email_type
              support_type
              support_capacity
              domain_policy
            }
            services {
              id
              title
              desc
              url
            }
            testimonial {
              id
              author
              job_position
              testimonial
              url_avatar
            }
          }
        `,
      })
      .then((res) => {
        const {
          data: { price, services, testimonial },
          loading,
        } = res;
        setNewDataGraphql({
          ...newDataGraphql,
          price: price,
          services: services,
          testimonial: testimonial,
          loading: loading,
        });
      })
      .catch((err) => console.error(err.message));

  /**
   * * REST API WITH AXIOS
   */

  const getDataRest = async () => {
    await Axios.all([
      Axios.get(
        "https://gist.githubusercontent.com/faris-xapiens/9030bea669f7cd21c0a6418462725f46/raw/92bc177cb195ac567287214d02c4c637c535cae2/help.json"
      )
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.error(err.message)),

      Axios.get(
        "https://gist.githubusercontent.com/faris-xapiens/9030bea669f7cd21c0a6418462725f46/raw/92bc177cb195ac567287214d02c4c637c535cae2/customer.json"
      )
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.error(err.message)),

      Axios.get(
        "https://gist.githubusercontent.com/faris-xapiens/9030bea669f7cd21c0a6418462725f46/raw/92bc177cb195ac567287214d02c4c637c535cae2/blog.json"
      )
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.error(err.message)),
    ]).then(
      Axios.spread((helpData, customerData, blogData) => {
        return setNewDataRest({
          ...newDataRest,
          help: helpData,
          customer: customerData,
          blog: blogData,
          loading: false,
        });
      })
    );
  };

  useEffect(() => {
    try {
      getDataRest();
      getGraphQL();
    } catch (err) {
      console.error(err.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    customer,
    blog,
    help,
    loading: { loadingRest },
  } = newDataRest;
  const {
    price,
    services,
    testimonial,
    loading: { loadingGraphql },
  } = newDataGraphql;

  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home data={customer} loading={loadingRest} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/services">
            <Services data={services} loading={loadingGraphql} />
          </Route>
          <Route exact path="/price">
            <Price data={price} loading={loadingGraphql} />
          </Route>
          <Route exact path="/testimonial">
            <Testimonial data={testimonial} loading={loadingGraphql} />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog data={blog} />
          </Route>
          <Route exact path="/help">
            <Help data={help} loading={loadingRest} />
          </Route>
        </Switch>
        <Footer />
      </ApolloProvider>
    </Router>
  );
};

export default LandingPage;
