import { styled } from "styled-components";

export const StyledDash = styled.div<{
  duelistASelected: boolean;
  duelistBSelected: boolean;
  deckDuelistASelected: boolean;
  deckDelistBSelected: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  /* background-color: red; */

  .Buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;

    button {
      padding: 7.5px;
      border-radius: 5px;
      background-color: var(--grey-1);
    }

    button:hover {
      background-color: var(--grey-2);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px;
    gap: 10px;
  }

  .duelist {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    background-color: var(--grey-1);
    cursor: pointer;
  }

  .duelist:hover {
    background-color: var(--grey-2);
  }

  .Duel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    /* background-color: var(--grey-1); */
  }

  .duelistInformations {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    background-color: var(--grey-1);
    border-radius: 5px;
    /* min-height: 350px; */

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 10px;
    }

    li {
      padding: 10px;
      border-radius: 10px;
      width: 100%;
      background-color: var(--grey-2);
      cursor: pointer;
    }

    li:hover {
      background-color: var(--grey-3);
    }
  }

  .buttonDuel {
    padding: 8px;
    border-radius: 5px;
    background-color: var(--grey-1);
    margin-top: 20px;
    width: 100%;
    max-width: 200px;
  }

  .buttonDuel:hover {
    background-color: var(--grey-2);
  }

  .timer {
    margin: 10px;
    color: var(--grey-1);
    background-color: var(--grey-2);
    padding: 10px;
    border-radius: 5px;
  }

  .selected {
    background-color: #4caf50;
    color: white;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.7);
  }
`;
