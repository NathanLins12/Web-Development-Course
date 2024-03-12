import styled from "styled-components";
const a = true;
export const ButtonContainer = styled.button`
  background: ${a ? "red" : "yellow"};
  background: ${({ theme }) => theme.theme.complementary };
  color: white;

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
