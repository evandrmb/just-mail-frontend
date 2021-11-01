import styled from "styled-components";

const StyledInputField = styled.input`
  border: 1px solid var(--regent-gray);
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5rem;
  margin-bottom: 1rem;
  outline: none;
  width: 100%;

  ::-webkit-input-placeholder {
    color: var(--regent-gray);
    font-size: 0.875rem;
  }

  :focus {
    border: 2px solid var(--royal-blue);
  }
`;

export const StyledInputFieldContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  :focus-within label {
    color: var(--royal-blue);
  }
`;

export const StyledLabel = styled.label`
  color: var(--nevada);
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.875rem;
`;

export default StyledInputField;
