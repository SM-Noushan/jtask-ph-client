import { Empty, Pagination, Select, Skeleton } from "antd";
import Filter from "../../Components/Products/Filter";
import Product from "../../Components/Products/Product";
import useMyState from "../../Hooks/useMyState";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ProductSkeleton = () => (
  <div className="space-y-4 lg:w-52 xl:w-80">
    <Skeleton.Image />
    <Skeleton />
  </div>
);

const Home = () => {
  const {
    baseURL,
    filter,
    setFilter,
    itemsCount,
    setItemCounts,
    itemsCountPending,
    currPage,
    setCurrPage,
    setItemsCountPending,
    items,
    setItems,
    searchItems,
    itemsPending,
    setItemsPending,
    setSearchItems,
    sortBy,
    setSortBy,
  } = useMyState();

  const { search } = useLocation();

  useEffect(() => {
    if (!search) {
      setSearchItems("");
      setCurrPage(1);
    }
  }, [search]);

  // item counts
  useEffect(() => {
    setItemsCountPending(true);
    axios
      .get(`${baseURL}/totalProductsCount?search=${searchItems}`)
      .then((response) => {
        setItemCounts(response.data.itemCount);
        setItemsCountPending(false);
      });
  }, [searchItems]);

  // fetch items
  useEffect(() => {
    setItemsPending(true);
    axios
      .get(
        `${baseURL}/products?search=${searchItems}&page=${currPage}&sort=${sortBy}`
      )
      .then((response) => {
        setItems(response.data);
        setItemsPending(false);
      });
  }, [searchItems, currPage, sortBy]);

  return (
    <div className="lg:flex lg:justify-center gap-6 lg:px-8 my-6">
      <Filter />
      <div className="lg:flex-1">
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
              defaultValue="default"
              style={{
                width: 160,
              }}
              onChange={(val) => setSortBy(val)}
              options={[
                {
                  value: "default",
                  label: "Default",
                },
                {
                  value: "priceAsc",
                  label: "Price (Low To High)",
                },
                {
                  value: "priceDesc",
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
        <div
          className={
            itemsPending
              ? ""
              : items?.length > 0
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container max-w-screen-xl px-4 lg:px-0 mx-auto"
              : ""
          }
        >
          {itemsPending ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          ) : items?.length > 0 ? (
            items.map((item) => <Product key={item._id} item={item} />)
          ) : (
            <Empty />
          )}
        </div>
        {!itemsPending && !itemsCountPending && (
          <div className="mt-6">
            <Pagination
              align="center"
              total={itemsCount}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              defaultPageSize={6}
              current={currPage}
              // defaultCurrent={1}
              showLessItems={true}
              onChange={(pageNum) => setCurrPage(pageNum)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
