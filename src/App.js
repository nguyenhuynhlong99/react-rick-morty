import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './pages/Episodes';
import Location from './pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/react-rick-morty/" element={<Home />} />
        <Route path="/react-rick-morty/:id" element={<CardDetails />} />

        <Route path="/react-rick-morty/episodes" element={<Episodes />} />
        <Route
          path="/react-rick-morty/episodes/:id"
          element={<CardDetails />}
        />

        <Route path="/react-rick-morty/location" element={<Location />} />
        <Route
          path="/react-rick-morty/location/:id"
          element={<CardDetails />}
        />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');

  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let res = await fetch(api);
      let data = await res.json();
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards results={results} page="/" />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
