import styled from "styled-components";

type TControlMenu = {
  isOpen: boolean;
};

export const Container = styled.div<TControlMenu>`
  position: fixed;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 600px;
  padding: 20px;
  height: 330px;
  display: flex;
  flex-direction: column;
  z-index: 4;
  background: #f2f2f2;
  border-radius: 4px;
  position: relative;
`;

export const ModalHeader = styled.div`
  width: 100%;

  p {
    font-size: 30px;
    color: #5e60ce;
    text-transform: uppercase;
  }
`;

export const CloseIcon = styled.div`
  width: fit-content;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
`;
