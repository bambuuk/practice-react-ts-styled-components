import {FC} from 'react';
import styled from 'styled-components';

const SpacerHeaderUI = styled.h1`
  font-size: 0.8rem;
  letter-spacing: 8px;
  text-transform: uppercase;
  font-weight: 100;
  margin-bottom: 1rem;
`;

interface SpacerHeaderProps {
  text: string;
}

const SpacerHeader: FC<SpacerHeaderProps> = ({text}) => {
  return (
    <SpacerHeaderUI>
      {text}
    </SpacerHeaderUI>
  )
}

export default SpacerHeader;
