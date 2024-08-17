import PropTypes from "prop-types";
import { createContext, useState } from "react";

const baseURL = "http://localhost:8000/api";

export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  //toggle filter for small screens
  const [filter, setFilter] = useState(false);
  //for items/products count
  const [itemsCount, setItemCounts] = useState(0);
  const [itemsCountPending, setItemsCountPending] = useState(true);
  //for current page number
  const [currPage, setCurrPage] = useState(1);
  //for sorting value
  const [sortBy, setSortBy] = useState("default");
  //for items/products
  const [items, setItems] = useState(null);
  const [searchItems, setSearchItems] = useState("");
  const [itemsPending, setItemsPending] = useState(true);

  const stateInfo = {
    filter,
    setFilter,
    itemsCount,
    setItemCounts,
    itemsCountPending,
    setItemsCountPending,
    currPage,
    setCurrPage,
    sortBy,
    setSortBy,
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
