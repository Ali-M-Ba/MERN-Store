import ProductList from "../components/ProductList";

const HomePage = ({ deleteJob }) => {
  return (
    <>
      <main>
        <section className="section">
          <h1 className="heading">Current Products</h1>
          <ProductList deleteJob={deleteJob} />
        </section>
      </main>
    </>
  );
};

export default HomePage;
