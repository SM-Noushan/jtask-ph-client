import PropTypes from "prop-types";
import { createContext, useState } from "react";

const baseURL = "http://localhost:8000/api";

export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  //toggle filter for small screens
  const [filter, setFilter] = useState(false);
  //for items/products
  const [items, setItems] = useState(null);
  const [searchItems, setSearchItems] = useState("");
  const [itemsPending, setItemsPending] = useState(true);

  const stateInfo = {
    filter,
    setFilter,
    items,
    setItems,
    searchItems,
    setSearchItems,
    itemsPending,
    setItemsPending,
    baseURL,
  };

  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateProvider;
