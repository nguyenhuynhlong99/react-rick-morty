import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      const res = await fetch(api);
      const data = await res.json();
      setInfo(data);

      const charactersData = await Promise.all(
        data.residents.map((link) => {
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
          Location:
          <span className="text-primary">
            {' '}
            {name === '' ? 'Unknown' : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === '' ? 'Unknown' : dimension}
        </h5>
        <h6 className="text-center">Type: {type === '' ? 'Unknown' : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup total={126} setId={setId} name="Location" />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results} page="/location/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
