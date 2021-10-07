import StyledInputField, {
  StyledLabel,
  StyledInputFieldContainer,
} from "./styled";

const InputField = ({ type, label, id, required, placeholder }) => {
  return (
    <StyledInputFieldContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInputField
        id={id}
        type={type}
        placeholder={placeholder ?? label}
        required={required}
      />
    </StyledInputFieldContainer>
  );
};

export default InputField;
