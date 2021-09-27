import StyledTextInputField, {
  StyledLabel,
  StyledTextInputFieldContainer,
} from "./styled";

const TextInputField = ({ type, label, id }) => {
  return (
    <StyledTextInputFieldContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledTextInputField id={id} type={type} placeholder={label} />
    </StyledTextInputFieldContainer>
  );
};

export default TextInputField;
