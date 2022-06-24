import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useFetchPage } from './hooks/useFetchPage';
import { GlobalContext } from './common/store';
import Home from './pages/Home';

const App = () => {

  const location = useLocation();
  const { filterInput } = useContext(GlobalContext);
  const pageParam = new URLSearchParams(location.search);
  const fetchPage = useFetchPage();

  useEffect(() => {

    const pageNumber = Number(pageParam.get('page')) ?? 1;
    const filterById = Number(pageParam.get('filter_id'));

    filterInput.set && filterInput.set(filterById > 0 ? filterById : null);

    fetchPage(pageNumber, filterById);

  }, []);

  return (
    <div className="App" style={{ width: '100%' }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
