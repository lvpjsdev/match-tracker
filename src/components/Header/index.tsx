import { FC } from 'react';
import { ErrorComponent } from '../ErrorComponent';
import { Button } from '../Button';
import RetryIcon from '../../assets/Refresh.svg?react';

interface Props {
  isError?: boolean;
  isDisabled?: boolean;
  onRetry: () => void;
}

export const Header: FC<Props> = ({ isError, isDisabled, onRetry }) => {
  return (
    <header>
      <h1>Match Tracker</h1>
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
    </header>
  );
};
