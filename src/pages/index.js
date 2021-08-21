import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../assets/surprised.jpg"
      />
    </Layout>
  );
};

export default IndexPage;