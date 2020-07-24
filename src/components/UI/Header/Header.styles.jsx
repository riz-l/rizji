// Import: Styled-Components
import styled from "styled-components";

// Import: Dependencies
import { Link } from "react-router-dom";

// Styled-Component: HeaderContainer
export const HeaderContainer = styled.div`
  background: white;
  display: flex;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 25px;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 999;
`;

// Styled-Component: LogoContainer
export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;
  width: 70px;
`;

// Styled-Component: OptionsContainer
export const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 50%;
`;

// Styled-Component: OptionLink
export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
`;
