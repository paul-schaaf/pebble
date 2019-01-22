import React from 'react';
import { Element } from 'react-scroll';
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
    <Element name="heroSection">
      <HeroSection fingerEmoji={data.fingerEmojiBig} />
    </Element>
    <Element name="problemSection">
      <ProblemSection
        lollipopEmoji={data.lollipopEmoji}
        shackEmoji={data.shackEmoji}
        fingerEmoji={data.fingerEmojiSmall}
      />
    </Element>
    <Element name="featureSection">
      <FeatureSection
        craneEmoji={data.craneEmoji}
        microscopeEmoji={data.microscopeEmoji}
        robotEmoji={data.robotEmoji}
        dnaEmoji={data.dnaEmoji}
        policeCarEmoji={data.policeCarEmoji}
        brainEmoji={data.brainEmoji}
        fingerEmoji={data.fingerEmojiSmall}
      />
    </Element>
    <Element name="pricingSection">
      <PricingSection
        smallFishEmoji={data.smallFishEmoji}
        mediumFishEmoji={data.mediumFishEmoji}
        bigFishEmoji={data.bigFishEmoji}
      />
    </Element>
    <Element name="praiseSection">
      <PraiseSection
        womanYellowFaceWhiteHair={data.womanYellowFaceWhiteHair}
        womanWhiteFaceBlackHair={data.womanWhiteFaceBlackHair}
        robotEmoji={data.robotPraise}
        santaEmoji={data.santaEmoji}
        manYellowFaceWhiteHair={data.manYellowFaceWhiteHair}
        manBlackFaceBlackHair={data.manBlackFaceBlackHair}
        grandma={data.grandma}
        womanWhiteFaceRedhair={data.womanWhiteFaceRedhair}
        womanBlackFaceCurlyHair={data.womanBlackFaceCurlyHair}
        manScientist={data.manScientist}
        zombie={data.zombie}
        manLaptop={data.manLaptop}
        womanArtist={data.womanArtist}
        princess={data.princess}
        manAstronaut={data.manAstronaut}
        blackOfficer={data.blackOfficer}
      />
    </Element>
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

export const fishEmoji = graphql`
  fragment fishEmoji on File {
    childImageSharp {
      fixed(width: 22) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const praiseEmoji = graphql`
  fragment praiseEmoji on File {
    childImageSharp {
      fixed(width: 24) {
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

    fingerEmojiBig: file(relativePath: { eq: "pointing_finger.png" }) {
      childImageSharp {
        fluid(maxWidth: 34) {
          ...GatsbyImageSharpFluid
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

    microscopeEmoji: file(relativePath: { eq: "microscope.png" }) {
      ...mainEmoji
    }

    robotEmoji: file(relativePath: { eq: "robotEmoji.png" }) {
      childImageSharp {
        fixed(width: 28) {
          ...GatsbyImageSharpFixed
        }
      }
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

    smallFishEmoji: file(relativePath: { eq: "smallFishEmoji.png" }) {
      ...fishEmoji
    }

    mediumFishEmoji: file(relativePath: { eq: "mediumFishEmoji.png" }) {
      ...fishEmoji
    }

    bigFishEmoji: file(relativePath: { eq: "bigFishEmoji.png" }) {
      childImageSharp {
        fluid(maxWidth: 20) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    womanYellowFaceWhiteHair: file(
      relativePath: { eq: "praiseEmojis/woman_yellowFace_whiteHair.png" }
    ) {
      ...praiseEmoji
    }

    womanWhiteFaceBlackHair: file(
      relativePath: { eq: "praiseEmojis/woman_whiteFace_blackHair.png" }
    ) {
      ...praiseEmoji
    }

    robotPraise: file(relativePath: { eq: "robotEmoji.png" }) {
      ...praiseEmoji
    }

    santaEmoji: file(relativePath: { eq: "praiseEmojis/santa.png" }) {
      ...praiseEmoji
    }

    manYellowFaceWhiteHair: file(
      relativePath: { eq: "praiseEmojis/man_yellowFace_whiteHair.png" }
    ) {
      childImageSharp {
        fixed(width: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    manBlackFaceBlackHair: file(
      relativePath: { eq: "praiseEmojis/man_blackFace_blackHair.png" }
    ) {
      childImageSharp {
        fixed(width: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    grandma: file(relativePath: { eq: "praiseEmojis/grandma.png" }) {
      ...praiseEmoji
    }

    womanWhiteFaceRedhair: file(
      relativePath: { eq: "praiseEmojis/woman_whiteFace_redHair.png" }
    ) {
      ...praiseEmoji
    }

    womanBlackFaceCurlyHair: file(
      relativePath: { eq: "praiseEmojis/woman_blackFace_curlyHair.png" }
    ) {
      ...praiseEmoji
    }

    manScientist: file(relativePath: { eq: "praiseEmojis/man_scientist.png" }) {
      ...praiseEmoji
    }

    zombie: file(relativePath: { eq: "praiseEmojis/zombie.png" }) {
      ...praiseEmoji
    }

    manLaptop: file(relativePath: { eq: "praiseEmojis/man_laptop.png" }) {
      ...praiseEmoji
    }

    womanArtist: file(relativePath: { eq: "praiseEmojis/woman_artist.png" }) {
      ...praiseEmoji
    }

    princess: file(relativePath: { eq: "praiseEmojis/princess.png" }) {
      ...praiseEmoji
    }

    manAstronaut: file(relativePath: { eq: "praiseEmojis/man_astronaut.png" }) {
      ...praiseEmoji
    }

    blackOfficer: file(relativePath: { eq: "praiseEmojis/black_officer.png" }) {
      childImageSharp {
        fixed(width: 18) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
