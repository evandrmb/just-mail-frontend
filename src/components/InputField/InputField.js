import StyledInputField, {
  StyledLabel,
  StyledInputFieldContainer,
} from "./styled";

const InputField = ({ type, label, id, required, placeholder, onChange }) => {
  return (
    <StyledInputFieldContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInputField
        id={id}
        type={type}
        placeholder={placeholder ?? label}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </StyledInputFieldContainer>
  );
};

export default InputField;
