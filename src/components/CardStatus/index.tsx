import { FC } from 'react';
import styled from 'styled-components';

enum MATCH_STATUS {
  LIVE = 'Live',
  FINISHED = 'Finished',
  PREPARING = 'Match preparing',
}

interface Props {
  status: MATCH_STATUS;
}

const getBgColor = (status: MATCH_STATUS) => {
  switch (status) {
    case MATCH_STATUS.LIVE:
      return 'rgba(67, 173, 40, 1)';
      break;
    case MATCH_STATUS.FINISHED:
      return 'rgba(235, 2, 55, 1)';
      break;
    case MATCH_STATUS.PREPARING:
      return 'rgba(235, 100, 2, 1)';
      break;
    default:
      return 'rgba(0, 0, 0, 1)';
      break;
  }
};

const StyledDiv = styled.div<{ $status: MATCH_STATUS }>`
  padding: 6px 21px;
  border-radius: 4px;
  min-width: 92px;
  color: rgba(255, 255, 255, 1);
  background-color: ${({ $status }) => getBgColor($status)};
  font-weight: 600;
  font-size: 12px;
`;

export const CardStatus: FC<Props> = ({ status }) => {
  return <StyledDiv $status={status}>{status}</StyledDiv>;
};
