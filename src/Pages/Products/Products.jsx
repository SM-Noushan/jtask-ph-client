import Filter from "../../Components/Products/Filter";
import Product from "../../Components/Products/Product";

const Home = () => {
  return (
    <div className="flex gap-6 px-4 lg:px-8 my-6">
      <Filter />
      <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container max-w-screen-xl mx-auto">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
