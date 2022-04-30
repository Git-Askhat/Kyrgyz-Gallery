import styled, { css } from 'styled-components';


export const TabsHolder = styled.div`
  display: flex;
`;

export const TabHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

interface Active {
  active: any,
  disabled?: any,
}

export const StylizedTab = styled.p<Active>`
  font-family: 'Quicksand' 'san-serif';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;

  margin-left: 40px;

  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
  ${(p) =>
    p.active &&
    css`
      color: #00adb5;
    `}
`