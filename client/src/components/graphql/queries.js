import { gql } from "@apollo/client";

export const GET_DATA_PRICE = gql`
  query Price {
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
  }
`;

export const GET_DATA_SERVICES = gql`
  query Services{
    services {
      id
      title
      desc
      url
    }
  }
`;

export const GET_DATA_TESTIMONIAL = gql`
  query Testimonial {
    testimonial {
      id
      author
      job_position
      testimonial
      url_avatar
    }
  }
`;
