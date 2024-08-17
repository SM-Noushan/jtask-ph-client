import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Checkbox, InputNumber, Slider } from "antd";
import useMyState from "../../Hooks/useMyState";

const FilterTitle = ({ title }) => (
  <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-950">
    {title}
  </h2>
);

const Filter = () => {
  const { filter, setFilter } = useMyState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);

  // handler for price range changes
  const handleInputChange = (setter) => (value) => {
    if (!isNaN(value) && value >= 0 && value <= 500) {
      setter(value);
    }
  };

  //   handler for brands
  const handleBrands = (val) => {
    setBrand(val);
  };

  //   handler for category
  const handleCategory = (val) => {
    setCategory(val);
  };

  useEffect(() => {
    // console.log(category);
    // console.log(brand);
  }, [category]);

  return (
    <aside
      className={`${
        filter ? "translate-x-0 px-8 pt-20" : "-translate-x-full  "
      } absolute lg:static lg:px-0 lg:pt-0 lg:translate-x-0 w-80 lg:w-64 text-gray-800 duration-200 z-20 bg-gray-900 lg:bg-white h-full inset-0`}
    >
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
      <nav className="space-y-8 text-sm *:p-6 *:space-y-2 *:bg-white *:rounded-md">
        <div>
          <FilterTitle title="Price Range" />
          <div className="flex items-center justify-between gap-2">
            <InputNumber
              min={0}
              max={499}
              value={minPrice}
              step={25}
              onChange={handleInputChange(setMinPrice)}
            />
            <InputNumber
              min={1}
              max={500}
              value={maxPrice}
              step={25}
              onChange={handleInputChange(setMaxPrice)}
            />
          </div>
          <Slider
            range
            value={[minPrice, maxPrice]}
            //   defaultValue={[minPrice, maxPrice]}
            step={25}
            max={500}
            onChange={(val) => {
              setMinPrice(val[0]);
              setMaxPrice(val[1]);
            }}
          />
        </div>
        <div>
          <FilterTitle title="Brand" />
          <Checkbox.Group className="flex flex-col" onChange={handleBrands}>
            <Checkbox value="Brand A">Brand A</Checkbox>
            <Checkbox value="Brand B">Brand B</Checkbox>
          </Checkbox.Group>
          {/* <Checkbox onChange={handleBrands} de="Brand 1">
              Brand 1
            </Checkbox> */}
        </div>

        <div>
          <FilterTitle title="Category" />
          <Checkbox.Group className="flex flex-col" onChange={handleCategory}>
            <Checkbox value="Category A">Category A</Checkbox>
            <Checkbox value="Category B">Category B</Checkbox>
          </Checkbox.Group>
          {/* <Checkbox onChange={handleBrands} de="Brand 1">
              Brand 1
            </Checkbox> */}
        </div>
      </nav>
    </aside>
  );
};

FilterTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
