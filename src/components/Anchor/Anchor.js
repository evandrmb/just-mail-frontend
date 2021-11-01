import StyledAnchor from "./styled.js";

const Anchor = ({ children, href }) => {
  return <StyledAnchor href={href}>{children}</StyledAnchor>;
};

export default Anchor;
