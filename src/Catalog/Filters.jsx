import React from 'react';
import styled, { css } from 'styled-components';
import arrowIcon from '../assets/arrow.svg';

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  white-space: nowrap;
`;

const Hint = styled.div`
  display: inline-block;
  margin-right: 2rem;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: .66;
  color: #171717;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Button = styled.button`
  display: inline-block;
  margin-right: 1rem;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: .66;
  border: none;
  background: transparent;
  ::after {
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background: url(${arrowIcon});
    background-size: cover;
    content: " ";
  }
  align-self: flex-start;
  ${props =>
    props.right &&
    css`
    align-self: flex-end;
  `};
`;

export default () =>
  (<Filters>
    <div>
      <Hint>Refine by</Hint>
      <Button>Category</Button>
      <Button>Colour</Button>
      <Button>Size</Button>
    </div>
    <Button right>Sort by price</Button>
  </Filters>);