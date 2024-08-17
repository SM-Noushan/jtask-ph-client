import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const [filter, setFilter] = useState(false); //toggle filter for small screens

  const stateInfo = {
    filter,
    setFilter,
  };

  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateProvider;
