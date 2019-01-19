import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSection from '../components/heroSection';
import ProblemSection from '../components/problemSection';
import FeatureSection from '../components/featureSection';
import PricingSection from '../components/pricingSection';
import PraiseSection from '../components/praiseSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <ProblemSection />
    <FeatureSection />
    <PricingSection />
    <PraiseSection />
  </Layout>
);

export default IndexPage;
