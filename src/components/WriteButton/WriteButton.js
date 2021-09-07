import StyledWriteButton, { StyledAddImg } from "./styled";

const WriteButton = (props) => {
  return (
    <StyledWriteButton onClick={props.onClick}>
      <StyledAddImg src="add.svg" alt="add"></StyledAddImg>
      Write
    </StyledWriteButton>
  );
};

export default WriteButton;
