import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <PresentationalBit>{displayedValue}</PresentationalBit>
      <IconWrapper style={{ "--size": 24 + "px" }}>
        <Icon id={"chevron-down"} size={24} strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const StyledSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  cursor: pointer;

  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
  &::-ms-expand {
    display: none;
  }
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: 1rem;
  border-radius: 8px;

  ${StyledSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${StyledSelect}:hover + & {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;
