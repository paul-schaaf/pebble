import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSection from '../components/heroSection';
import ProblemSection from '../components/problemSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <ProblemSection />
  </Layout>
);

export default IndexPage;
