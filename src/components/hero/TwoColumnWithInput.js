import React, { useState } from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import validator from 'validator';
import { send as emailJs } from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/school-kids.jpg";
import CustomersLogoStripImage from "../../images/grey-reviews.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

const Hero = ({ roundedHeaderButton }) => {

  const { addToast } = useToasts();

  const [text, setText] = useState('');
  const [textError, setTextError] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const value = target.value;

    setText(value);

    if (validator.isEmail(value) || validator.isMobilePhone(value, 'en-IN')) {
      setTextError(null)
    } else {
      setTextError('Enter valid Email or Phone Number!')
    }
  }

  const sendMessage = (event) => {
    console.log('sssss')
    event.preventDefault();

    if (text && !textError) {

    const templateParams = {
      from_name: '[Query] School Website',
      to_name: 'sunrisemodelpublicschool@gmail.com',
      message: text
    };
    emailJs("service_1d2s78a", "template_kdo5hto", templateParams, 'xjoUJo_ZSYlc5mV3K')
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
          addToast('Sent Successfully', { appearance: 'success' });
        },
        function(err) {
          console.log("ERROR", `Status: ${err.status}, Message: ${err.text}`)
          addToast(`Status: ${err.status}, Message: ${err.text}`, { appearance: 'error' });
        }
      );
        setText('');
  } else {
    addToast('Enter a valid value & try again', { appearance: 'error' });
  }
}

  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
            Where learning meets <span tw="text-primary-500">creativity.</span>
            </Heading>
            <Paragraph>
            Welcome to Sun Rise Model Public School, one of the most premier educational institutions in Himachal Pradesh.
            </Paragraph>
            <Actions>
              <input type="text" placeholder="E-mail or Phone Number" value={text} onChange={(e) => handleInputChange(e)} />
              <button onClick={(e) => sendMessage(e)}>Get Started</button>
            </Actions>

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style={{ fontWeight: 'bold', color: '#ec5959' }}>{textError}</span>
            <CustomersLogoStrip>
              <p>Our TRUSTED Customer Reviews</p>
              <img src={CustomersLogoStripImage} alt="Our Customers"/>
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-2xl" src={DesignIllustration} alt="Design Illustration" style={{"border-radius": "8px"}} />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};

export default Hero;