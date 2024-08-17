import Product from "../../Components/Products/Product";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container max-w-screen-xl mx-auto px-4 lg:px-8 my-6">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Home;
