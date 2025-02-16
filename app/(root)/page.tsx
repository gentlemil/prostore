// testing loading spinner (make HomePage async and run await delay(2000))
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
