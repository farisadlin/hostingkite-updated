import React from "react";
import SEO from "../../SEO";
import ContactPresenter from '../validation/ContactPresenter'
import ContactValidation from '../validation/ContactValidation'

const Contact = () => {
  return (
    <>
    <SEO title="Contact Us" description="Contact Us" content="Contact Us"/>

    <ContactPresenter>
      <ContactValidation />
    </ContactPresenter>
    </>
  );
};

export default Contact;
