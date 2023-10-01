import { FC } from 'react';
import styled from 'styled-components';

const ButtonUI = styled.button`
  width: 100%;
  border-radius: 0.25rem;
  color: white;
  background: ${(themeProps) => themeProps.theme.colors.primaryColor};
  outline: none;
  border: 1px solid ${(themeProps) => themeProps.theme.colors.primaryColor};
  padding: 8px 0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: ${(themeProps) => themeProps.theme.colors.primaryColorHover};
  }

  &:disabled {
    color: #666777;
    background-color: lightgray;
  }
`;

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  text: string;
}

const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <ButtonUI {...props}>
      {text}
    </ButtonUI>
  )
}

export default Button;
