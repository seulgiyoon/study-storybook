import React from 'react';
import styled from 'styled-components';

export default function Option({ title, checked }) {
  return (
    <StyledOptionWrapper>
      <div>{title}</div>
      <div>
        <input type="radio" id="option_1" checked={checked === 1}></input>
        <label htmlFor="option_1">Option 1</label>
        <input type="radio" id="option_2" checked={checked === 2}></input>
        <label htmlFor="option_2">Option 2</label>
        <input type="radio" id="option_3" checked={checked === 3}></input>
        <label htmlFor="option_3">Option 3</label>
      </div>
    </StyledOptionWrapper>
  );
}

const StyledOptionWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
`;
