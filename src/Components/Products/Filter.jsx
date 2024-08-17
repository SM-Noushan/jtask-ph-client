import PropTypes from "prop-types";
import { useEffect } from "react";
import { Checkbox, InputNumber, Slider, Spin } from "antd";
import useMyState from "../../Hooks/useMyState";
import axios from "axios";

const FilterTitle = ({ title }) => (
  <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-950">
    {title}
  </h2>
);

const Filter = () => {
  const {
    baseURL,
    filter,
    setFilter,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    allCategoriesAndBrands,
    setAllCategoriesAndBrands,
    allCategoriesAndBrandsPending,
    setAllCategoriesAndBrandsPending,
    setBrand,
    setCategory,
  } = useMyState();

  // handler for price range changes
  const handleInputChange = (setter) => (value) => {
    if (!isNaN(value) && value >= 0 && value <= 2500) {
      setter(value);
    }
  };

  //   handler for brands
  const handleBrands = (val) => {
    setBrand([...val]);
  };

  //   handler for category
  const handleCategory = (val) => {
    setCategory([...val]);
  };

  useEffect(() => {
    setAllCategoriesAndBrandsPending(true);
    axios.get(`${baseURL}/categoriesAndBrands`).then((response) => {
      setAllCategoriesAndBrands(response?.data[0]);
      setAllCategoriesAndBrandsPending(false);
    });
  }, []);

  return (
    <aside
      className={`${
        filter ? "translate-x-0 px-8 pt-20" : "-translate-x-full  "
      } absolute lg:static lg:px-0 lg:pt-0 lg:translate-x-0 w-80 lg:w-64 text-gray-800 duration-200 z-20 bg-gray-900 lg:bg-white h-full inset-0`}
    >
      {/* close filter (small device) */}
      <button
        onClick={() => setFilter(false)}
        className="absolute right-1/2 translate-x-1/2 top-6 bg-slate-50 rounded-full p-1 lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      <nav className="space-y-8 text-sm *:px-6 py-6 *:space-y-2 *:bg-white *:rounded-md">
        {/* price range */}
        <div>
          <FilterTitle title="Price Range" />
          <div className="flex items-center justify-between gap-2">
            <InputNumber
              min={0}
              max={2499}
              value={minPrice}
              onChange={handleInputChange(setMinPrice)}
            />
            <InputNumber
              min={1}
              max={2500}
              value={maxPrice}
              onChange={handleInputChange(setMaxPrice)}
            />
          </div>
          <Slider
            range
            value={[minPrice, maxPrice]}
            //   defaultValue={[minPrice, maxPrice]}
            step={1}
            max={2500}
            onChange={(val) => {
              setMinPrice(val[0]);
              setMaxPrice(val[1]);
            }}
          />
        </div>
        {/* filter by brand */}
        <div>
          <FilterTitle title="Brand" />
          <Checkbox.Group className="flex flex-col" onChange={handleBrands}>
            {allCategoriesAndBrandsPending ? (
              <Spin />
            ) : (
              allCategoriesAndBrands?.brands?.map((brand, idx) => (
                <Checkbox key={idx} value={brand}>
                  {brand}
                </Checkbox>
              ))
            )}
          </Checkbox.Group>
        </div>
        {/* filter by category */}
        <div>
          <FilterTitle title="Category" />
          <Checkbox.Group className="flex flex-col" onChange={handleCategory}>
            {allCategoriesAndBrandsPending ? (
              <Spin />
            ) : (
              allCategoriesAndBrands?.categories?.map((brand, idx) => (
                <Checkbox key={idx} value={brand} className="capitalize">
                  {brand}
                </Checkbox>
              ))
            )}
          </Checkbox.Group>
        </div>
      </nav>
    </aside>
  );
};

FilterTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
