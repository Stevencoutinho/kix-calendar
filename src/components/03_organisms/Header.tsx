/* import  */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { process } from "@/types";
import Image from "@/src/components/01_atoms/Image";
/* type */
interface Props {
  className?: string;
};
/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const {className: cn} = props;
  return (
    <header className={cn}>
      <p>Kix Calendar</p>
      <p><Link to="/calendar"><Image
        src={`${process.env.IMG_PATH}/utils/calendar.png`}
        alt="カレンダーのアイコン"
        width="40px"
      /></Link></p>
    </header>
  );
};
/* style */
const StyledComponent = styled(Component)<Props>`
  color: white;
  background-color: #818181;
  border-bottom: solid white 1.5px;
  display: flex;
  align-items: center;
  padding: 15px 0;
  p {
    text-align: center;
  }
  p:nth-of-type(1) {
    width: 66.6%;
    font-size: 3rem;
    font-weight: 400;
  }
  p:nth-of-type(2) {
    width: 33.3%;
  }
`;
/* container */
const Header = StyledComponent;

export default Header;