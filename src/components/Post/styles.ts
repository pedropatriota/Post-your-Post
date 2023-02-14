import styled, { css } from "styled-components";

const SharedCss = css`
  border-radius: 4px;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #262626;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    color: #f2f2f2;

    span {
      margin-right: 15px;
      color: #4ea8de;
    }

    &:first-child {
      grid-area: 1/1/2/2;
    }
    &:nth-child(2) {
      grid-area: 1/2/2/4;
      text-align: left;
    }
    &:nth-child(3) {
      grid-area: 2/1/3/4;
      text-align: left;
      ${SharedCss}
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
    &:last-child {
      grid-area: 3/1/4/4;
      ${SharedCss}
    }
  }
`;
