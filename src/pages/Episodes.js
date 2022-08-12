import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { name, air_date } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const res = await fetch(api);
      const data = await res.json();
      setInfo(data);

      const charactersData = await Promise.all(
        data.characters.map((link) => {
          return fetch(link).then((res) => res.json());
        })
      );
      setResults(charactersData);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-3">
          Episode:
          <span className="text-primary">
            {' '}
            {name === '' ? 'Unknown' : name}
          </span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup total={51} setId={setId} name="Episode" />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results} page="/episodes/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
