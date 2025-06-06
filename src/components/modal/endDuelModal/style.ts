import { styled } from "styled-components";

export const StyledEndDuelForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--grey-3);

  .duelists {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 20px;
    justify-content: space-around;
  }

  .duelistA {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .duelistB {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .duelistA > div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    gap: 10px;
  }

  .duelistB > div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    gap: 10px;
  }

  label {
    color: var(--grey-1);
  }

  input {
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-0);
  }

  select {
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-0);
  }

  .WinnerButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 20px;
    justify-content: space-around;
  }

  .WinnerButton button {
    background-color: var(--grey-2);
    padding: 1rem 0;
    color: var(--grey-0);
    font-weight: 700;
    border-radius: 5px;
    width: 100%;
  }

  .endDuelButton {
    background-color: var(--color-primary-negative);
    padding: 1rem 0;
    color: var(--grey-0);
    font-weight: 700;
    border-radius: 5px;
    width: 100%;
  }

  .endDuelButton:hover {
    background-color: var(--color-primary);
  }

  /* .showsenha {
    background-color: var(--color-primary-negative);
    padding: 1rem 0;
    color: var(--grey-0);
    font-weight: 700;
    border-radius: 5px;
    width: 20%;
  }

  .showsenha:hover {
    background-color: var(--color-primary);
  } */
`;
