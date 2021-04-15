import React from "react";
import { Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const PriceData = ({data}) => {
  const formatPrice = (price) => {
    return Intl.NumberFormat("id-ID").format(price);
  };

  const discountedPrice = (price) => {
    const discount = 0.8;
    return Intl.NumberFormat("id-ID").format(price / discount);
  };

  const items = data.map(
    (
      {
        hosting_type,
        price,
        duration,
        capacity_space,
        capacity_type,
        bandwidth_capacity,
        bandwidth_type,
        website_capacity,
        website_type,
        email_capacity,
        email_type,
        support_type,
        support_capacity,
        domain_policy,
      },
      key
    ) => {
      const isDiscount = (
        <div
          key={key}
          className="price-container d-flex align-items-center justify-content-center flex-row py-3"
        >
          <p className="hosting-price my-0 py-2 lead font-weight-bold text-center">
            <strike>{discountedPrice(price)}</strike>
            <br />
            <sup>Rp </sup>
            {formatPrice(price)}
            <small className="font-weight-lighter font-italic ml-1">
              {" "}
              Per {duration}
            </small>
          </p>
        </div>
      );

      const notDiscount = (
        <div className="price-container d-flex align-items-center justify-content-center flex-column py-3">
          <p className="hosting-price my-0 py-2 lead font-weight-bold text-center">
            <sup>Rp </sup>
            {formatPrice(price)}
            <br />
          </p>
          <p className="hosting-price my-0 font-italic">Per {duration}</p>
        </div>
      );

      const isRecommended = (
        <div className="recommend-box">
          <p className="text-capitalize text-center my-0 text-white font-weight-bolder lead">
            We Recommend
          </p>
        </div>
      );
      return (
        <Col
          lg={4}
          className="price-wrapper d-flex justify-content-center align-items-center flex-column my-5"
        >
          <div className="item-price d-flex justify-content-center flex-column">
            {hosting_type === "Super" && isRecommended}
            <div className="d-flex align-items-center justify-content-center">
              <p className="hosting-type font-weight-bold text-secondary lead py-2 px-5 my-0">
                {hosting_type}
              </p>
            </div>
            {hosting_type === "Super" ? isDiscount : notDiscount}
            <Row className="px-5">
              <Col>
                <p className="text-right text-secondary my-0 py-1">
                  {capacity_space}
                </p>
                <p className="text-right text-secondary my-0 py-1">
                  {bandwidth_capacity}
                </p>
                <p className="text-right text-secondary my-0 py-1">
                  {website_capacity}
                </p>
                <p className="text-right text-secondary my-0 py-1">
                  {email_capacity}
                </p>
                <p className="text-right text-secondary my-0 py-1">
                  {support_type}
                </p>
              </Col>
              <Col>
                <p className="text-left text-secondary font-weight-lighter my-0 py-1">
                  {capacity_type}
                </p>
                <p className="text-left text-secondary font-weight-lighter my-0 py-1">
                  {bandwidth_type}
                </p>
                <p className="text-left text-secondary font-weight-lighter my-0 py-1">
                  {website_type}
                </p>
                <p className="text-left text-secondary font-weight-lighter my-0 py-1">
                  {email_type}
                </p>
                <p className="text-left text-secondary font-weight-lighter my-0 py-1">
                  {support_capacity}
                </p>
              </Col>
            </Row>

            <Col>
              <p className="d-flex justify-content-center text-center text-secondary font-weight-lighter my-0 py-2">
                Free Domain
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="tooltip-right">{domain_policy}</Tooltip>
                  }
                >
                  <i className="far fa-question-circle d-flex align-items-center ml-1"></i>
                </OverlayTrigger>
              </p>

              <p className="d-flex justify-content-center text-center text-secondary font-weight-lighter my-0 py-2">
                SSH Access
              </p>
            </Col>
            <Button variant="warning" className="mx-5 my-3">
              Order
            </Button>
          </div>
        </Col>
      );
    }
  );

  return items;
};

export default PriceData;
