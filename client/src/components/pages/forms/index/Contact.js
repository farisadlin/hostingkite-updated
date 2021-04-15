import React from "react";
import ContactPresenter from '../validation/ContactPresenter'
import ContactValidation from '../validation/ContactValidation'

const Contact = () => {
  return (
    <ContactPresenter>
      <ContactValidation />
    </ContactPresenter>
  );
};

export default Contact;
