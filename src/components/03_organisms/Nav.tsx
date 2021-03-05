/* import  */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "@/src/components/01_atoms/Image";
import { GlobalStoreProvider, process } from "@/types";
import { Store } from "@/src/Store";
/* type */
interface Props {
  className?: string;
  active: string;
};
/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const cn = props.className;
  const active = props.active;
  return (
    <nav className={cn}>
      <ul>
        <li className={active == "" ? "active" : ""}><Link to="/"><Image
          src={`${process.env.IMG_PATH}/utils/home.png`}
          alt="ホームのアイコン"
          width="30px"
        /></Link></li>
        <li className={active == "search" ? "active" : ""}><Link to="/search"><Image
          src={`${process.env.IMG_PATH}/utils/search.png`}
          alt="検索のアイコン"
          width="30px"
        /></Link></li>
        <li className={active == "favorite" ? "active" : ""}><Link to="/favorite"><Image
          src={`${process.env.IMG_PATH}/utils/heart.png`}
          alt="お気に入りのアイコン"
          width="30px"
        /></Link></li>
      </ul>
    </nav>
  );
};
/* styled */
const StyledComponent = styled(Component)<Props>`
  background-color: #818181;
  ul {
    display: flex;
    li {
      width: 33.3%;
      text-align: center;
      padding: 10px 0;
      a {
        display: block;
      }
    }

  }
  .active {
    background-color:#B1AAAA;
  }
`;
/* container */
const Nav: React.FC = (): JSX.Element => {
  // Context API
  const { state, dispatch }: GlobalStoreProvider = React.useContext(Store);
  return (
    <StyledComponent active={state.active} />
  );
};

export default Nav;



