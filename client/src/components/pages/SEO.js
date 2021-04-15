import React from 'react'
import {Helmet} from 'react-helmet'

const SEO = ({title, description, content}) => {
    return (
      <>
        <Helmet>
          <title>{title} || {document.title}</title>
          <meta name={description} content={content} />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>
      </>
    );
}

export default SEO
