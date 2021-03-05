/* import  */
import React from "react";
import styled from "styled-components";
import Layout from "@/src/components/04_templates/Layout";
import { GlobalStoreProvider } from "@/types";
import { Store } from "@/src/Store";
/* type */
interface Props {
  className?: string;
};
/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  return (
    <p>a</p>
  );
};
/* style */
const StyledComponent = styled(Component)<Props>`
  color: red;
`;
/* container */
const Search: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default Search;