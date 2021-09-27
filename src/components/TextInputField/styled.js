import styled from "styled-components";

const StyledTextInputField = styled.input`
  border: 1px solid var(--regent-gray);
  box-sizing: border-box;
  border-radius: 6px;
  height: 2rem;
  outline: none;

  ::-webkit-input-placeholder {
    color: var(--regent-gray);
    font-size: 0.875rem;
  }

  :focus {
    border: 2px solid var(--royal-blue);
  }
`;

export const StyledTextInputFieldContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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

export default StyledTextInputField;
