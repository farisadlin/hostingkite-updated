import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {GET_DATA_PRICE, GET_DATA_SERVICES, GET_DATA_TESTIMONIAL} from "../graphql/queries"
import {useQuery} from '@apollo/client'

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

const LandingPage = ({client}) => {
  const [newDataRest, setNewDataRest] = useState({
    help: [],
    customer: [],
    blog: [],
    loading: true,
  });

  useEffect(() => {
    try {
      getDataRest();
    } catch (err) {
      console.error(err.message);
    }
  }, []);

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

  const {
    customer,
    blog,
    help,
    loading: { loadingRest },
  } = newDataRest;

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home data={customer} loading={loadingRest} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/price">
          <Price />
        </Route>
        <Route path="/testimonial">
          <Testimonial />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog data={blog} />
        </Route>
        <Route path="/help">
          <Help data={help} loading={loadingRest} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default LandingPage;
