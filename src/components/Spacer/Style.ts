import styled from "styled-components";

import type { TSpacer } from ".";

export const SpacerContainer = styled.div<TSpacer>`
  width: 100%;
  margin-top: ${({ value }) => value};
`;
