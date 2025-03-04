import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: rgba(255, 255, 255, 1);
  background-color: rgba(235, 2, 55, 1);
  border-radius: 4px;
  padding: 16px;
  border: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 10px;
  }

  &:active {
    background-color: rgba(160, 17, 49, 1);
  }

  &:disabled {
    background-color: rgba(112, 19, 40, 1);
    color: rgba(120, 120, 120, 1);
  }
`;

interface Props {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  iconAfter?: ReactNode;
}

export const Button: FC<Props> = ({
  children,
  onClick,
  disabled = false,
  iconAfter,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
      {iconAfter}
    </StyledButton>
  );
};
