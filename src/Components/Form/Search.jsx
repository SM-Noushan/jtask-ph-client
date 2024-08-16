const Search = () => {
  return (
    <form className="flex items-center max-w-md gap-x-4">
      <label htmlFor="search-product" className="sr-only">
        Search
      </label>
      <input
        id="search-product"
        name="search"
        type="text"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-indigo-300"
        placeholder="Enter Product Name"
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
