import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useFetchPage } from './hooks/useFetchPage';
import Home from './pages/Home';
import { useAppDispatch } from './common/hooks';
import { setInputFilter } from './features/inputFilter';

const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const fetchPage = useFetchPage();

  const pageParam = new URLSearchParams(location.search);

  useEffect(() => {
    const pageNumber = Number(pageParam.get('page')) ?? 1;
    const filterById = Number(pageParam.get('filter_id'));

    dispatch(setInputFilter({ value: filterById }));

    fetchPage({
      filterById,
      nextPage: pageNumber,
    });
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
