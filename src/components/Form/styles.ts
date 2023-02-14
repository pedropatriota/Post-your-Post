import styled, { css } from "styled-components";

export const Form = styled.form`
  position: absolute;
  min-width: 500px;
  top: 91px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 500px) {
    width: 90%;
    min-width: 320px;
  }
`;

export const ContainerUserField = styled.div`
  grid-area: 1/1/2/4;
`;

const InputGlobalStyle = css`
  border-radius: 4px;
  padding: 2px 8px;
  background-color: #262626;
  outline: none;
  color: #ccc;
  border: none;
`;

export const Input = styled.input`
  ${InputGlobalStyle}
  height: 38px;
  grid-area: 1/4/2/7;
`;

export const Textarea = styled.textarea`
  ${InputGlobalStyle}
  height: 100px;
  grid-area: 2/1/3/7;
`;
