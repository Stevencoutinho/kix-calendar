/* import */
import React from "react";
import styled from "styled-components";
import { process } from "@/types";
/* type */
interface Props {
  className?: string;
  src: string;
  alt: string;
  width?: string;
  height?: string;
};
/* component */
const Component: React.FC<Props> = (props): JSX.Element => (
  <img
    className={props.className}
    src={props.src}
    alt={props.alt}
  />
);
/* style */
const StyleComponent = styled(Component)`
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;
/* container */
const Image = StyleComponent;
/* export */
export default Image;

