import { useContext } from "react";
import { StateContext } from "../Providers/StateProvider";

const useMyState = () => {
  const state = useContext(StateContext);
  return state;
};

export default useMyState;
