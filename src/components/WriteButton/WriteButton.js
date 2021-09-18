import StyledWriteButton, { StyledAddImg } from "./styled";
import AddIcon from "../icons/add.svg";

const WriteButton = ({onClick}) => {
  return (
    <StyledWriteButton onClick={onClick}>
      <StyledAddImg src={AddIcon} alt="add"/>
      Write
    </StyledWriteButton>
  );
};

export default WriteButton;
