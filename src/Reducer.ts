/* myTypes */
import { GlobalState, Actions } from '@/types';

export const reducer = (state: GlobalState, action: Actions): GlobalState => {
  switch(action.type) {
    case "ACTIVE":
      return { ...state, active: action.payload };
    case "NEWKIX":
      return { ...state, newKix: action.payload };
    case "TODAYKIX":
      return { ...state, todayKix: action.payload };
    default:
      return { ...state };
  }
};