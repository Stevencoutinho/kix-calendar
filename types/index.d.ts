/* store */
export declare interface GlobalState {
  active: string;
  newKix: Kix[],
  todayKix: Kix[],
}
/* kix */
export declare interface Kix {
  id: string;
  brand: string;
  colorway: string;
  gender: string;
  media: {
    imageUrl: string;
    smallImageUrl: string;
    thumbUrl: string;
  };
  releaseDate: string;
  retailPrice: number;
  styleId: string;
  shoe: string;
  name: string;
  title: string;
  year: number;
}
/* action */
declare interface ActiveAction {
  type: "ACTIVE";
  payload: string;
}
declare interface NewKixAction {
  type: "NEWKIX";
  payload: Kix[];
}
declare interface TodayKixAction {
  type: "TODAYKIX";
  payload: Kix[];
}

export type Actions =
  | ActiveAction
  | NewKixAction
  | TodayKixAction;

/* provider */
export declare interface GlobalStoreProvider {
  state: GlobalState;
  dispatch: React.Dispatch<Actions>;
}

/* process */
export declare interface process {
  env: {
    IMG_PATH: string;
    API_PATH: string;
  }
}
