// testing loading spinner (make HomePage async and run await delay(2000))
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

const HomePage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default HomePage;
