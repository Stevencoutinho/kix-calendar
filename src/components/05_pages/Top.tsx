/* import  */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "@/src/components/01_atoms/Image";
import Layout from "@/src/components/04_templates/Layout";
import { GlobalStoreProvider, Kix } from "@/types";
import { Store } from "@/src/Store";
import ajax from "@/src/utils/ajax";
import useLocalStrage from "@/src/utils/useLocalStrage";
/* type */
interface Props {
  className?: string;
  newKix: Kix[];
};
/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const cn = props.className;
  return (
    <div className={cn}>
      <h1 className="none">Kix Calendarのトップページ</h1>
      <article>
        <h2>new kix</h2>
        {props.newKix.length ? (
          <dl>{props.newKix.map(e => (
            <div key={e.id}><Link to={`/detail/${e.styleId}`}>
              <dt><Image
                src={e.media.thumbUrl}
                alt={`${e.title}のイメージ画像`}
                width="150px"
                /></dt>
              <dd>{e.title}</dd>
              <dd>販売価格: {e.retailPrice ? `$${e.retailPrice}` : "未定"}</dd>
              <dd>発売日　: {e.releaseDate.replace(/-/g, "/")}</dd>
            </Link></div>
          ))}</dl>
        ):(
          <p>Loading...</p>
        )}
      </article>
    </div>
  );
};
/* style */
const StyledComponent = styled(Component)<Props>`
  article {
    h2 {
      font-size: 2.5rem;
      padding: 10px;
    }
    dl {
      display: flex;
      flex-flow: wrap row;
      justify-content: space-evenly;
      div {
        width: 45%;
        padding: 5px;
        margin-bottom: 10px;
        dt {
          text-align: center;
          margin-bottom: 5px;
        }
        dd {
          margin-bottom: 10px;
        }
        dd:nth-of-type(1) {
          min-height: 60px;
        }
      }
    }
  }
  font-size: 1.6rem;
`;
/* container */
const Top: React.FC = (): JSX.Element => {
  // Context API
  const { state, dispatch }: GlobalStoreProvider = React.useContext(Store);

  // hooks useEffect: API(GET)
  React.useEffect(() => {
    // custom hooks uselocalStrage
    useLocalStrage("favoriteKix");
    if(!state.newKix.length) {
      ajax({method: "GET", url: "/v1/sneakers?limit=10"})
      ?.then(res => dispatch({type: "NEWKIX", payload: res.data.results}))
      .catch(err => console.error(err));
    }
  },[]);

  return (
    <Layout>
      <StyledComponent newKix={state.newKix} />
    </Layout>
  );
};

export default Top;