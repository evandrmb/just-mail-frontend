import styled from "styled-components";

export const StyledSignUpView = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 1.5rem 1rem;
  width: 100vw;

  @media (min-width: 720px) {
    align-items: center;
    justify-content: center;
    padding: 5rem;
  }
`;

export const StyledSignUpForm = styled.form`
  @media (min-width: 720px) {
    border: 1px solid var(--mako);
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    width: 100%;
  }
`;

export const StyledFirstNameGridArea = styled.div`
  grid-area: firstName;
`;
export const StyledLastNameGridArea = styled.div`
  grid-area: lastName;
`;
export const StyledUsernameGridArea = styled.div`
  grid-area: username;
`;

export const StyledNameDiv = styled.div`
  @media (min-width: 720px) {
    display: grid;
    column-gap: 1rem;
    grid-template-areas:
      "firstName  lastName"
      "username username";
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 1.875rem;
  margin-bottom: 1.5rem;
`;

export const StyledAuthButtonBar = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
