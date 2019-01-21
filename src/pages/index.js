import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSection from '../components/heroSection';
import ProblemSection from '../components/problemSection';
import FeatureSection from '../components/featureSection';
import PricingSection from '../components/pricingSection';
import PraiseSection from '../components/praiseSection';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <ProblemSection
      lollipopEmoji={data.lollipopEmoji}
      shackEmoji={data.shackEmoji}
      fingerEmoji={data.fingerEmojiSmall}
    />
    <FeatureSection />
    <PricingSection />
    <PraiseSection />
  </Layout>
);

export default IndexPage;

export const mainEmoji = graphql`
  fragment mainEmoji on File {
    childImageSharp {
      fixed(width: 30) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const query = graphql`
  query {
    lollipopEmoji: file(relativePath: { eq: "lollipop.png" }) {
      ...mainEmoji
    }

    shackEmoji: file(relativePath: { eq: "shackIcon.png" }) {
      ...mainEmoji
    }

    fingerEmojiSmall: file(relativePath: { eq: "pointing_finger.png" }) {
      childImageSharp {
        fixed(width: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
