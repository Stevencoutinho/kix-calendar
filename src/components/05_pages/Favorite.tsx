/* import  */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "@/src/components/01_atoms/Image";
import Layout from "@/src/components/04_templates/Layout";
import useLocalStrage from "@/src/utils/useLocalStrage";
import { GlobalStoreProvider, Kix } from "@/types";
import { Store } from "@/src/Store";
/* type */
interface Props {
  className?: string;
  favoriteKix: Kix[];
};
/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const cn = props.className;
  return (
    <div className={cn}>
      <h1 className="none">Kix Calendarのトップページ</h1>
      <article>
        <h2>favorite kix</h2>
        {props.favoriteKix.length ? (
          <dl>{props.favoriteKix.map(e => (
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
          <p>お気に入り登録されていません</p>
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
    p {
      text-align: center;
    }
  }
  font-size: 1.6rem;
`;
/* container */
const Favorite: React.FC = (): JSX.Element => {
  // hooks useState: favoriteKix
  const [favoriteKix, setFavoriteKix] = React.useState<Kix[]>([]);
  console.log(favoriteKix);
  React.useEffect(() => {
    // custom hooks uselocalStrage
    useLocalStrage("favoriteKix");
    const item: any = localStorage.getItem("favoriteKix");
    const ary = JSON.parse(item);
    setFavoriteKix(ary);
  }, []);
  return (
    <Layout>
      <StyledComponent favoriteKix={favoriteKix} />
    </Layout>
  );
};

export default Favorite;