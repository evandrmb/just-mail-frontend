import styled from "styled-components";

const StyledWriteButton = styled.button`
  align-items: center;
  background-color: var(--white);
  border: none;
  border-radius: 40px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.15);
  color: var(--mako);
  cursor: pointer;
  display: flex;
  font-weight: 500;
  font-size: 1rem;
  height: 3rem;
  justify-content: center;
  margin: 0 1rem;
  padding: 0.75rem, 1.25rem, 1.25rempx, 1.25rem;
  width: 7.8rem;
  outline: none;
`;

const StyledAddImg = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  padding-right: 1rem;
  pointer-events: none;
`;

const WriteButton = (props) => {
  return (
    <StyledWriteButton onClick={props.onClick}>
      <StyledAddImg src="add.svg" alt="add"></StyledAddImg>
      Write
    </StyledWriteButton>
  );
};

export default WriteButton;
