import * as React from "react";
import styled from "styled-components";

const SDepositButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 224px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`;

interface IDepositButtonStyleProps {
  disabled: boolean;
  icon?: any;
}

interface IDepositButtonProps extends IDepositButtonStyleProps {
  onClick?: any;
}

const SHoverLayer = styled.div`
  transition: all 0.15s ease-in-out;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.1);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
`;

const SIcon = styled.div`
  position: absolute;
  height: 28px;
  width: 28px;
  margin-left: 13.1%;
  top: calc((100% - 28px) / 2);
`;

const SDepositButton = styled.button<IDepositButtonStyleProps>`
  transition: all 0.15s ease-in-out;
  position: relative;
  line-height: 1em;
  background-image: none;
  outline: none;
  overflow: hidden;
  box-shadow: none;
  border: none;
  border-style: none;
  box-sizing: border-box;
  background-color: white;
  border: none;
  color: black;
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
    0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ icon }) => (icon ? "8px 5% 7px 17.2%" : "8px 12px")};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  will-change: transform;

  &:disabled {
    opacity: 0.7;
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
      0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  }

  @media (hover: hover) {
    &:hover {
      transform: ${({ disabled }) => (!disabled ? "translateY(-1px)" : "none")};
      box-shadow: ${({ disabled }) =>
        !disabled
          ? `0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)`
          : `0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)`};
    }

    &:hover ${SHoverLayer} {
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    transform: ${({ disabled }) => (!disabled ? "translateY(1px)" : "none")};
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
      0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
    color: rgba(255, 255, 255, 0.7);

    & ${SIcon} {
      opacity: 0.7;
    }
  }

  & ${SIcon} {
    right: auto;
    left: 0;
    display: ${({ icon }) => (icon ? "block" : "none")};
    mask: ${({ icon }) => (icon ? `url(${icon}) center no-repeat` : "none")};
    mask-size: 100%;
    background-color: rgb(255, 255, 255);
    transition: 0.15s ease;
  }
`;

const DepositButton = (props: IDepositButtonProps) => (
  <SDepositButtonContainer>
    <SDepositButton type="button" icon={props.icon} {...props}>
      <SHoverLayer />
      <SIcon />
      {"+ Create New Chain"}
    </SDepositButton>
  </SDepositButtonContainer>
);

DepositButton.defaultProps = {
  disabled: false,
  icon: null,
};

export default DepositButton;