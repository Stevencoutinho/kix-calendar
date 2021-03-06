/* import  */
import React from "react";
import styled from "styled-components";
import Image from "@/src/components/01_atoms/Image";
import Layout from "@/src/components/04_templates/Layout";
import ajax from "@/src/utils/ajax";
import useLocalStrage from "@/src/utils/useLocalStrage";
import { GlobalStoreProvider, Kix, process } from "@/types";
import { Store } from "@/src/Store";
import { Link } from "react-router-dom";
/* type */
interface Props {
  className?: string;
  searchKix: Kix[];
  onDelete: () => void;
  onSearch: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const cn = props.className;
  const searchKix = props.searchKix;
  return (
    <div className={cn}>
      <h1 className="none">ブランド検索</h1>
      {searchKix.length ? (
        <article>
          <p className="back-btn" onClick={props.onDelete}>←</p>
          <h2>results</h2>
          <dl>{searchKix.map(e => (
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
        </article>
      ):(
        <article>
          <h2>brands</h2>
          <ul>
            <li><button value="nike" onClick={props.onSearch}><Image
              src={`${process.env.IMG_PATH}/brands/nike.png`}
              alt="nikeのロゴ"
              width="150px"
            /></button></li>
            <li><button value="adidas" onClick={props.onSearch}><Image
              src={`${process.env.IMG_PATH}/brands/adidas.png`}
              alt="adidasのロゴ"
              width="150px"
            /></button></li>
            <li><button value="new balance" onClick={props.onSearch}><Image
              src={`${process.env.IMG_PATH}/brands/new_balance.png`}
              alt="new balanceのロゴ"
              width="150px"
            /></button></li>
            <li><button value="reebok" onClick={props.onSearch}><Image
              src={`${process.env.IMG_PATH}/brands/reebok.png`}
              alt="reebokのロゴ"
              width="150px"
            /></button></li>
            <li><button value="converse" onClick={props.onSearch}><Image
              src={`${process.env.IMG_PATH}/brands/converse.png`}
              alt="converseのロゴ"
              width="150px"
            /></button></li>
            <li><button value="asics" onClick={props.onSearch}><Image
              src={`${process.env.IMG_PATH}/brands/asics.png`}
              alt="asicsのロゴ"
              width="150px"
            /></button></li>
            <li><button value="vans" onClick={props.onSearch}><Image
              src={`${process.env.IMG_PATH}/brands/vans.png`}
              alt="vansのロゴ"
              width="150px"
            /></button></li>
            <li><button value="puma" onClick={props.onSearch}><Image
              src={`${process.env.IMG_PATH}/brands/puma.png`}
              alt="pumaのロゴ"
              width="150px"
            /></button></li>
          </ul>
        </article>
      )}
    </div>
  );
};
/* style */
const StyledComponent = styled(Component)<Props>`
  article {
    width: 100%;
    padding: 10px;
    ul {
      display: flex;
      flex-flow: wrap row;
      justify-content: space-evenly;
      align-items: center;
      li {
        margin-bottom: 30px;
      }
    }
    dl {
      display: flex;
      flex-flow: wrap row;
      justify-content: space-evenly;
      font-size: 1.6rem;
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
`;
/* container */
const Search: React.FC = (): JSX.Element => {
  // hooks useState: searchKix
  const [searchKix, setSearchKix] = React.useState<Kix[]>([]);
  // handleClick: brands
  const handleDelete = () => setSearchKix([]);
  // handleClick: search
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ajax({method: "GET", url: `/v1/sneakers?limit=10&brand=${e.currentTarget.value}`})
    ?.then(res => setSearchKix(res.data.results))
    .catch(err => console.error(err));
  };
  // hooks useEffect: useLocalStrage
  React.useEffect(() => {
    // custom hooks uselocalStrage
    useLocalStrage("favoriteKix");
  },[]);
  return (
    <Layout>
      <StyledComponent
        searchKix={searchKix}
        onDelete={handleDelete}
        onSearch={handleSearch}
      />
    </Layout>
  );
};

export default Search;