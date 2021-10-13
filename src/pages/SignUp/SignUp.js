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
  StyledSignUpForm,
  StyledNameDiv,
  StyledFirstNameGridArea,
  StyledLastNameGridArea,
  StyledUsernameGridArea,
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
      <StyledSignUpForm>
        <StyledTitle>Create your JustMail account</StyledTitle>
        <StyledNameDiv>
          <StyledFirstNameGridArea>
            <InputField
              label="First Name"
              type="text"
              required={true}
              onChange={setFirstName}
            />
          </StyledFirstNameGridArea>
          <StyledLastNameGridArea>
            <InputField
              label="Last Name"
              type="text"
              required={true}
              onChange={setLastName}
            />
          </StyledLastNameGridArea>
          <StyledUsernameGridArea>
            <InputField
              label="Username"
              type="email"
              required={true}
              onChange={setUsername}
            />
          </StyledUsernameGridArea>
        </StyledNameDiv>
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
      </StyledSignUpForm>
    </StyledSignUpView>
  );
};

export default SignUp;
