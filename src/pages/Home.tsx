import ProductTable from '../components/ProductTable';
import FilterTextField from '../components/FilterTextField';
import { useAppSelector } from '../common/hooks';


const Home = () => {

  const products = useAppSelector(state => state.products.data);

  return (
    <>
      <FilterTextField />
      <ProductTable products={products.filter(p => p.isFiltered)} />
    </>
  )
};
export default Home;
