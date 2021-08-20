import styled from "styled-components";

const StyledWriteButton = styled.button`
  background-color: var(--white);
  border: none;
  border-radius: 40px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.15);
  height: 3rem;
  width: 7.8rem;
  outline: none;
`;

const WriteButton = () => {
  return <StyledWriteButton>Write</StyledWriteButton>;
};

export default WriteButton;
