import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;

  gap: 20px;
  border-bottom: solid var(--grey-2) 0.5px;
  margin-bottom: 20px;

  h1 {
    color: var(--color-primary);
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 500px;
    padding: 10px;
    gap: 10px;

    a {
      padding: 10px;
      border-radius: 10px;
      background-color: var(--grey-1);
      color: var(--grey-5);
      width: 100%;
      text-align: center;
    }

    a:hover {
      background-color: var(--grey-2);
    }
  }
`;
