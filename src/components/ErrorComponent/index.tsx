import styled from 'styled-components';
import AlertIcon from '../../assets/alert-triangle.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 14px 24px;
  background-color: rgba(15, 19, 24, 1);

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export const ErrorComponent = () => (
  <StyledDiv>
    <AlertIcon />
    <StyledSpan>Ошибка: не удалось загрузить информацию</StyledSpan>
  </StyledDiv>
);
