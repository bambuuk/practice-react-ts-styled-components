import { FC } from 'react';
import styled from 'styled-components';

const ContainerUI = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

interface ChildrenOnlyProps {
  children: JSX.Element
}

const Container: FC<ChildrenOnlyProps> = ({children}) => {
  return (
    <ContainerUI>
      {children}
    </ContainerUI>
  )
}

export default Container
