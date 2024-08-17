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
  // filter by price range
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2500);
  // all categories and brands
  const [allCategoriesAndBrands, setAllCategoriesAndBrands] = useState([]);
  const [allCategoriesAndBrandsPending, setAllCategoriesAndBrandsPending] =
    useState(true);
  //filter by brand
  const [brand, setBrand] = useState([]);

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
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    allCategoriesAndBrands,
    setAllCategoriesAndBrands,
    allCategoriesAndBrandsPending,
    setAllCategoriesAndBrandsPending,
    brand,
    setBrand,
  };

  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateProvider;
