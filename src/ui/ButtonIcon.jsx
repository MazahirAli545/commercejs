import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    ${(props) =>
      props.variation === "primary" &&
      css`
        color: var(--color-brand-600);
      `}

    ${(props) =>
      props.variation === "danger" &&
      css`
        color: var(--color-red-700);
      `}
  }
`;

ButtonIcon.defaultProps = {
  variation: "primary",
};

export default ButtonIcon;
