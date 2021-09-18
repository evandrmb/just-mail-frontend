import StyledWriteButton, { StyledAddImg } from "./styled";

const WriteButton = ({onClick}) => {
  return (
    <StyledWriteButton onClick={onClick}>
      <StyledAddImg src="add.svg" alt="add"></StyledAddImg>
      Write
    </StyledWriteButton>
  );
};

export default WriteButton;
