import styled from "styled-components";

import type { TButton } from ".";

export const Button = styled.button<Partial<TButton>>`
  height: 50px;
  border-radius: 4px;
  color: #fff;
  background-color: ${({ hasBg }) => (hasBg ? "#1e6f9f" : "transparent")};
  border: none;
  text-transform: uppercase;
  grid-area: ${({ gridArea }) => gridArea};
  transition: 0.3s linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ hasBg }) => (hasBg ? "#228ac8" : "transparent")};
  }
`;
