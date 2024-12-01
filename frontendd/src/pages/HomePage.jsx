import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="max-w-7xl m-auto py-16 px-6">
          <h1 className="text-center text-4xl font-bold mb-8">
            Current Products
          </h1>
          <ProductList />
        </section>
      </main>
    </>
  );
};

export default HomePage;
