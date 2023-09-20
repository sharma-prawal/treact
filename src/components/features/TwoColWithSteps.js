import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import ImageGallery from 'react-image-gallery';

import a from '../../images/school/1.JPG';
import b from '../../images/school/2.JPG';
import c from '../../images/school/3.JPG';
import d from '../../images/school/4.JPG';
import e from '../../images/school/5.JPG';
import f from '../../images/school/6.JPG';
import g from '../../images/school/7.JPG';
import h from '../../images/school/8.JPG';
import i from '../../images/school/9.JPG';
import j from '../../images/school/10.JPG';
import k from '../../images/school/11.JPG';
import l from '../../images/school/12.JPG';
import m from '../../images/school/13.JPG';
import n from '../../images/school/14.JPG';
import o from '../../images/school/15.JPG';
import p from '../../images/school/16.JPG';
import q from '../../images/school/17.JPG';
import r from '../../images/school/18.JPG';
import s from '../../images/school/19.JPG';
import t from '../../images/school/20.JPG';
import u from '../../images/school/21.JPG';
import v from '../../images/school/22.JPG';
import w from '../../images/school/23.JPG';
import x from '../../images/school/24.JPG';
import y from '../../images/school/25.JPG';
import z from '../../images/school/26.JPG';
import aa from '../../images/school/27.JPG';
import bb from '../../images/school/28.JPG';
import cc from '../../images/school/29.JPG';
import dd from '../../images/school/30.JPG';
import ee from '../../images/school/31.JPG';
import ff from '../../images/school/32.JPG';
import gg from '../../images/school/33.JPG';
import hh from '../../images/school/34.JPG';
import ii from '../../images/school/35.JPG';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const images = [
  {
    original: a,
    thumbnail: a,
  },
  {
    original: c,
    thumbnail: c,
  },
  {
    original: d,
    thumbnail: d,
  },
  {
    original: e,
    thumbnail: e,
  },
  {
    original: g,
    thumbnail: g,
  },
  {
    original: h,
    thumbnail: h,
  },
  {
    original: i,
    thumbnail: i,
  },
  {
    original: j,
    thumbnail: j,
  },
  {
    original: k,
    thumbnail: k,
  },
  {
    original: l,
    thumbnail: l,
  },
  {
    original: m,
    thumbnail: m,
  },
  {
    original: n,
    thumbnail: n,
  },
  {
    original: o,
    thumbnail: o,
  },
  {
    original: p,
    thumbnail: p,
  },
  {
    original: q,
    thumbnail: q,
  },
  // {
  //   original: r,
  //   thumbnail: r,
  // },
  {
    original: s,
    thumbnail: s,
  },
  {
    original: t,
    thumbnail: t,
  },
  {
    original: u,
    thumbnail: u,
  },
  {
    original: v,
    thumbnail: v,
  },
  {
    original: w,
    thumbnail: w,
  },
  {
    original: x,
    thumbnail: x,
  },
  {
    original: y,
    thumbnail: y,
  },
  {
    original: z,
    thumbnail: z,
  },
  {
    original: aa,
    thumbnail: aa,
  },
  {
    original: bb,
    thumbnail: bb,
  },
  {
    original: cc,
    thumbnail: cc,
  },
  // {
  //   original: dd,
  //   thumbnail: dd,
  // },
  {
    original: ee,
    thumbnail: ee,
  },
  // {
  //   original: ff,
  //   thumbnail: ff,
  // },
  {
    original: gg,
    thumbnail: gg,
  },
  // {
  //   original: hh,
  //   thumbnail: hh,
  // },
  // {
  //   original: ii,
  //   thumbnail: ii,
  // },
  // {
  //   original: f,
  //   thumbnail: f,
  // },
  {
    original: b,
    thumbnail: b,
  },
];

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;

export default ({
  subheading = "Our Expertise",
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Happy Faces",
      description: "A smile is the perfect accessory to any school uniform."
    },
    {
      heading: "Learning & Growing",
      description: "Learning is a journey that never ends, but the rewards are infinite."
    },
    {
      heading: "Creativity",
      description: "When you approach your school work with creativity, learning becomes a fun and exciting adventure."
    }
  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container id='glance'>
      <TwoColumn>
        <ImageColumn>
          <ImageGallery items={images} />
          {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Steps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber>{(index+1).toString().padStart(2,'0')}</StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                    <StepDescription>{step.description}</StepDescription>
                  </StepText>
                </Step>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
