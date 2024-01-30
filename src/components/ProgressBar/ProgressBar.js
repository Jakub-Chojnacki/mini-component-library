/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--padding": "0",
    "--borderRadius": "4px ",
    "--height": "8px",
  },
  medium: {
    "--padding": "0",
    "--borderRadius": "4px ",
    "--height": "12px",
  },
  large: {
    "--padding": "4px",
    "--borderRadius": "8px",
    "--height": "16px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error("Unknown size passed to the ProgressBar");
  }
  return (
    <StyledProgress
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      value={value}
      size={size}
      style={styles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper style={styles}>
        <Bar style={styles} value={value}></Bar>
      </BarWrapper>
    </StyledProgress>
  );
};

export default ProgressBar;

const StyledProgress = styled.div`
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--borderRadius);
`;

const Bar = styled.div`
  height: var(--height);
  width: ${(props) => props.value + "%"};
  background-color: ${COLORS.primary};
`;
