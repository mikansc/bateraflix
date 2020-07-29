/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 100%;
    display: 'flex';
    flex-direction: 'column';
    align-items: 'center';
    justify-content: 'center';
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 1) 0%,
      rgba(20, 20, 20, 1) 10%,
      rgba(20, 20, 20, 0.1) 80%,
      rgba(20, 20, 20, 0.1) 100%
    );
    &:hover {
      background: linear-gradient(
        to right,
        rgba(20, 20, 20, 1) 0%,
        rgba(20, 20, 20, 1) 10%,
        rgba(20, 20, 20, 0.6) 70%,
        rgba(20, 20, 20, 0.1) 100%
      );
    }
  }

  .slick-next {
    right: 0;
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 0%,
      rgba(20, 20, 20, 0.1) 20%,
      rgba(20, 20, 20, 1) 90%,
      rgba(20, 20, 20, 1) 100%
    );
    &:hover {
      background: linear-gradient(
        to right,
        rgba(20, 20, 20, 0.1) 0%,
        rgba(20, 20, 20, 0.6) 30%,
        rgba(20, 20, 20, 1) 90%,
        rgba(20, 20, 20, 1) 100%
      );
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
