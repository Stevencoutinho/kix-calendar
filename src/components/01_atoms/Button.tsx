/* import  */
import React from "react";
import styled from "styled-components";
import { Themes, Sizes, ButtonStyle } from "../../utils/theme";
/* type */
interface Props {
  className?: string;
  size: keyof typeof Sizes.button;
  color: keyof typeof Themes;
  onClick?: any;
};
/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const { className: cn } = props;
  return <button className={cn} onClick={props.onClick}>{props.children}</button>;
};

/* style */
const StyledComponent = styled(Component)<Props>`
  ${ButtonStyle}
  width: ${({ size }) => `${Sizes['button'][size]}`};
  height: ${({ size }) => `calc(${Sizes['button'][size]} * 0.3)`};
  font-size: 1.6rem;
  text-align: center;
  background-color: ${({ color }) => `${Themes[color]['backgroundColor']}`};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  color: ${({ color }) => `${Themes[color]['color']}`};
  outline: none;
`;

/* container */
const Button = StyledComponent;

/* export */
export default Button;