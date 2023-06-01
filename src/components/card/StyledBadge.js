import styled from "styled-components";

export const StyledBadge = styled.div`
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  display: inline-block;
  line-height: 1.2;
  font-weight: 500;
  background: ${(props) => {
    if (props.badge === "HTML") {
      return "chocolate";
    }
    if (props.badge === "CSS") {
      return "darkblue";
    }
    if (props.badge === "SCSS") {
      return "hotpink";
    }
    if (props.badge === "REACT") {
      return "crimson";
    }
    if (props.badge === "JAVASCRIPT") {
      return "brown";
    }
    if (props.badge === "NEXTJS") {
      return "blueviolet";
    }
    if (props.badge === "TYPESCRIPT") {
      return "darkcyan";
    }
  }};
`;
