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
    <FeatureSection
      craneEmoji={data.craneEmoji}
      microscopeEmoji={data.microscopeEmoji}
      robotEmoji={data.robotEmoji}
      dnaEmoji={data.dnaEmoji}
      policeCarEmoji={data.policeCarEmoji}
      brainEmoji={data.brainEmoji}
    />
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
    fingerEmojiSmall: file(relativePath: { eq: "pointing_finger.png" }) {
      childImageSharp {
        fixed(width: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    lollipopEmoji: file(relativePath: { eq: "lollipop.png" }) {
      ...mainEmoji
    }

    shackEmoji: file(relativePath: { eq: "shackIcon.png" }) {
      ...mainEmoji
    }

    craneEmoji: file(relativePath: { eq: "craneEmoji.png" }) {
      ...mainEmoji
    }

    miscroscopeEmoji: file(relativePath: { eq: "microscope.png" }) {
      ...mainEmoji
    }

    robotEmoji: file(relativePath: { eq: "robotEmoji.png" }) {
      ...mainEmoji
    }

    dnaEmoji: file(relativePath: { eq: "dnaEmoji.png" }) {
      ...mainEmoji
    }

    policeCarEmoji: file(relativePath: { eq: "policeCarEmoji.png" }) {
      ...mainEmoji
    }

    brainEmoji: file(relativePath: { eq: "brainEmoji.png" }) {
      ...mainEmoji
    }
  }
`;
