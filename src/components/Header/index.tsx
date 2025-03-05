import { FC } from 'react';
import { ErrorComponent } from '../ErrorComponent';
import { Button } from '../Button';
import RetryIcon from '../../assets/Refresh.svg?react';
import logo from '../../assets/Logo.png';
import styled from 'styled-components';

interface Props {
  isError?: boolean;
  isDisabled?: boolean;
  onRetry: () => void;
}

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Header: FC<Props> = ({ isError, isDisabled, onRetry }) => {
  return (
    <StyledHeader>
      <img height={32} width={257} src={logo} />
      <div>
        {isError && <ErrorComponent />}
        <Button
          disabled={isDisabled}
          onClick={onRetry}
          iconAfter={<RetryIcon />}
        >
          Обновить
        </Button>
      </div>
    </StyledHeader>
  );
};
