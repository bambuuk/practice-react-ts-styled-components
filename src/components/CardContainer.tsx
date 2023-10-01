import { FC } from 'react';
import styled from "styled-components";

const CardContainerUI = styled.div`
  display: flex;
  width: 600px;
  height: 450px;
  background-color: white;
  border-radius: 1.5em;
`;

const CardSide = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;

const CardLeftSideUI = styled(CardSide)`
  border-radius: 1.5em 0 0 1.5em;

  img {
    border-radius: 1.5em 0 0 1.5em;
    width: 100%;
  }
`;

const CardRightSideUI = styled(CardSide)`
  min-height: 100%;
  padding: 1.5em;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 1.5em 1.5em 0;

  h2 {
    font-family: "Merriweather", serif;
    font-size: 1.75rem;
    font-weight: bold;
    color: ${(themeProps) => themeProps.theme.colors.headerColor};
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  .price-container {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;

    h3 {
      font-size: 24px;
      color: ${(themeProps) => themeProps.theme.colors.primaryColor};
      margin-right: 1.5rem;
    }

    span {
      text-decoration: line-through;
    }
  }
`;

interface ChildrenOnlyProps {
  children: JSX.Element
}

export const CardContainer: FC<ChildrenOnlyProps> = ({ children }) => {
  return (
    <CardContainerUI>
      {children}
    </CardContainerUI>
  )
}

export const CardLeftSide: FC<ChildrenOnlyProps> = ({ children }) => {
  return (
    <CardLeftSideUI>
      {children}
    </CardLeftSideUI>
  )
}

export const CardRightSide: FC<ChildrenOnlyProps> = ({ children }) => {
  return (
    <CardRightSideUI>
      {children}
    </CardRightSideUI>
  )
}
