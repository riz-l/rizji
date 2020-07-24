// Import: Styled-Components
import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  border: none;
  color: white;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: none;
    color: white;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  border: none;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

// Styled-Component: CustomButtonContainer
export const CustomButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  font-family: "Lato";
  font-size: 12px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  width: auto;

  ${getButtonStyles}
`;
