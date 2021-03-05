/* import  */
import React from "react";
import styled from "styled-components";
import Header from "@/src/components/03_organisms/Header";
import Nav from "@/src/components/03_organisms/Nav";
import { HeaderHeight, FooterHeight } from "@/src/utils/theme";
import { GlobalStoreProvider } from "@/types";
import { Store } from "@/src/Store";

// /* type */
// interface Props {
//   className?: string;
// };

/* DOM */
const Layout: React.FC = ({children}): JSX.Element => {
  // context API
  const { state, dispatch }: GlobalStoreProvider = React.useContext(Store);
  // hooks useEffect: dispatch(現在のページ情報をstore)
  React.useEffect(() => {
    const path = location.pathname.split("/");
    dispatch({type: "ACTIVE", payload: path[1]})
  }, []);
  return (
    <>
    <div className="fix-head">
      <Header />
      <Nav />
    </div>
    <Main>{children}</Main>
    </>
  );
};

/* style */
const Main = styled.main`
  min-height: calc(100vh - ${HeaderHeight} - ${FooterHeight});
`;

/* export */
export default Layout;