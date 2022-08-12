import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  const { name, image, location, origin, gender, species, status, type } =
    fetchedData;

  useEffect(() => {
    (async function () {
      let res = await fetch(api);
      let data = await res.json();
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt={name} className="img-fluid" />

        {(() => {
          if (status === 'Dead') {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === 'Alive') {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}

        <div className="content">
          <p className="">
            <span className="fw-bold">Gender:</span>
            {gender}
          </p>
          <p className="">
            <span className="fw-bold">Species:</span>
            {species}
          </p>
          <p className="">
            <span className="fw-bold">Type:</span>
            {type === '' ? 'Unknown' : type}
          </p>
          <p className="">
            <span className="fw-bold">Location:</span>
            {location?.name}
          </p>
          <p className="">
            <span className="fw-bold">Origin:</span>
            {origin?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
