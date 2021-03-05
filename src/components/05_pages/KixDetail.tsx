/* import  */
import React from "react";
import styled from "styled-components";
import Image from "@/src/components/01_atoms/Image";
import Button from "@/src/components/01_atoms/Button";
import Layout from "@/src/components/04_templates/Layout";
import ajax from "@/src/utils/ajax";
import { GlobalStoreProvider, Kix } from "@/types";
import { Store } from "@/src/Store";
import { Link, RouteComponentProps } from "react-router-dom";
/* type */
interface Props {
  className?: string;
  kix?: Kix;
};
/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const cn = props.className;
  const kix = props.kix;
  return (
    <div className={cn}>{kix ? (
      <>
        <h1 className="none">{kix.title}の詳細情報</h1>
        <article>
          <p className="back-btn"><Link to="/">←</Link></p>
          <p className="image"><Image src={kix.media.smallImageUrl} alt={`${kix.title}のイメージ画像`} /></p>
          <h2>{kix.title}</h2>
          <p className="price">{kix.retailPrice ? "$" + kix.retailPrice : "価格未定"}</p>
          <p className="favorite-btn"><Button
            color="orange"
            size="large"
          >お気に入り登録する</Button></p>
          <dl>
            <div>
              <dt>発売日</dt>
              <dd>{kix.releaseDate.replace(/-/g, "/")}</dd>
            </div>
            <div>
              <dt>性別</dt>
              <dd>{kix.gender}</dd>
            </div>
            <div>
              <dt>ブランド</dt>
              <dd>{kix.brand}</dd>
            </div>
            <div>
              <dt>カラー</dt>
              <dd>{kix.colorway}</dd>
            </div>
            <div>
              <dt>商品ID</dt>
              <dd>{kix.styleId}</dd>
            </div>
          </dl>
        </article>
      </>
    ):(
      <p>...Loading</p>
    )}</div>
  );
};
/* style */
const StyledComponent = styled(Component)<Props>`
  article {
    width: 100%;
    padding: 10px;
    .back-btn, h2 {
      font-size: 2rem;
      /* padding: 10px; */
    }
    .back-btn {
      font-weight: bold;
    }
    .image {
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    h2 {
      margin-bottom: 5px;
    }
    .favorite-btn {
      text-align: center;
      margin-bottom: 20px;
    }
    .price {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }
    
    dl {
      div {
        display: flex;
        dt, dd {
          width: 50%;
          font-size: 1.4rem;
          font-weight: normal;
          border: solid #818181 1px;
          padding: 10px 0;
          padding-left: 5px;
        }
      }
    }
  }
`;
/* container */
const KixDetail: React.FC<RouteComponentProps<{styleId: string}>> = (props): JSX.Element => {
  // hooks use state: kix
  const [kix, setKix] = React.useState<Kix>();
  // hooks use effect: API(GET)
  React.useEffect(() => {
    ajax({method: "GET", url: `/v1/sneakers?limit=10&styleId=${props.match.params.styleId}`})
    ?.then(res => setKix(res.data.results[0]))
    .catch(err => console.error(err));
  },[]);
  return (
    <Layout>
      <StyledComponent kix={kix} />
    </Layout>
  );
};

export default KixDetail;