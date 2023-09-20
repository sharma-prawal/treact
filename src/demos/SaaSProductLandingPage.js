import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Footer from "components/footers/FiveColumnWithBackground.js";

import { ToastProvider } from 'react-toast-notifications';

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <ToastProvider><Hero roundedHeaderButton={true} /></ToastProvider>
      <Features
        heading={
          <>
            Education that inspires <HighlightedText>excellence.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Vision & Mission</Subheading>}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>Sun Rise At A Glance</Subheading>}
        textOnLeft={false}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        heading={
          <>
            Pankaj Sharma
            <br></br><HighlightedText>Director & Founder</HighlightedText>
          </>
        }
        showDecoratorBlob={true}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
