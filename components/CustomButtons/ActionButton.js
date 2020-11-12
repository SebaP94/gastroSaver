import React, { useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const StyledButton = styled.button`
  margin: 8px;
  background: transparent;
  padding: 8px 24px;
  border: darkgrey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled.div`
  grid-column: 1/1;
  grid-row: 1/-1;
  height: 24px;
  width: 24px;
`;

const iconStyles = css({ fill: "brown", height: "24px" });

export const ActionButton = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon>
        <BiLeftArrowCircle css={iconStyles} />
      </Icon>
      <div>
        {props.title && (
          <span fontWeight="bold" gridColumn="2/2" as="p">
            {props.title}
          </span>
        )}
        {props.subtitle && (
          <span fontWeight="medium" gridColumn="2/2" as="p">
            {props.subtitle}
          </span>
        )}
      </div>
    </StyledButton>
  );
};
