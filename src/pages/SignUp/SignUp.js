import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import InputField from "../../components/InputField/InputField";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";
import {
  StyledTitle,
  StyledSignUpView,
  StyledCheckboxContainer,
  StyledAuthButtonBar,
} from "./styled";

const SignUp = () => {
  const {
    setPassword,
    setConfirmPassword,
    setFirstName,
    setLastName,
    setUsername,
    setShowPassword,
    showPassword,
    signUp,
  } = useContext(AuthContext);

  return (
    <StyledSignUpView>
      <StyledTitle>Create your JustMail account</StyledTitle>
      <InputField
        label="First Name"
        type="text"
        required={true}
        onChange={setFirstName}
      />
      <InputField
        label="Last Name"
        type="text"
        required={true}
        onChange={setLastName}
      />
      <InputField
        label="Username"
        type="email"
        required={true}
        onChange={setUsername}
      />
      <InputField
        label="Password"
        type={showPassword ? "text" : "password"}
        required={true}
        onChange={setPassword}
      />
      <InputField
        label="Confirm Password"
        type={showPassword ? "text" : "password"}
        placeholder="Confirm"
        required={true}
        onChange={setConfirmPassword}
      />
      <StyledCheckboxContainer>
        <input
          type="checkbox"
          id="show"
          value="show"
          onClick={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="show">Show Password</label>
      </StyledCheckboxContainer>

      <StyledAuthButtonBar>
        <Anchor href="https://example.com" children="Sign In instead" />
        <Button onClick={signUp}>Confirm</Button>
      </StyledAuthButtonBar>
    </StyledSignUpView>
  );
};

export default SignUp;
