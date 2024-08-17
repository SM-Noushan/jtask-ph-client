import { Select } from "antd";
import Filter from "../../Components/Products/Filter";
import Product from "../../Components/Products/Product";
import useMyState from "../../Hooks/useMyState";

const Home = () => {
  const { filter, setFilter } = useMyState();
  return (
    <div className="lg:flex lg:justify-center gap-6 lg:px-8 my-6">
      <Filter />
      <div>
        <div className="mb-6 flex justify-between lg:justify-end">
          <button
            type="button"
            onClick={() => setFilter(!filter)}
            className="lg:hidden relative px-7 py-2 overflow-hidden font-semibold rounded bg-gray-100 text-gray-800"
          >
            Filter
            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </span>
          </button>
          <div>
            <span>Sort By: </span>
            <Select
              defaultValue="Default"
              style={{
                width: 160,
              }}
              onChange={(val) => console.log(val)}
              options={[
                {
                  value: "Default",
                  label: "Default",
                },
                {
                  value: "Price (Low)",
                  label: "Price (Low To High)",
                },
                {
                  value: "Price (High)",
                  label: "Price (High To Low)",
                },
                {
                  value: "Date",
                  label: "Date (Newest First)",
                },
              ]}
            />
          </div>
        </div>
        <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container max-w-screen-xl px-4 lg:px-0 mx-auto">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
