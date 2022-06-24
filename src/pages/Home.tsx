import ProductTable from '../components/ProductTable';
import FilterTextField from '../components/FilterTextField';
import { useContext } from 'react';
import { GlobalContext } from '../common/store';


const Home = () => {

  const { products } = useContext(GlobalContext);
  const filteredProducts = products.get && products.get.filter(p => p.isFiltered);

  return (
    <>
      <FilterTextField />
      <ProductTable products={filteredProducts} />
    </>
  )
};
export default Home;
