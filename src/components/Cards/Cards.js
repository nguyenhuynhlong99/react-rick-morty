import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((item) => (
      <Link
        style={{ textDecoration: 'none' }}
        to={`${page}${item.id}`}
        key={item.id}
        className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
      >
        <div
          className={`${styles.cards} d-flex flex-column justify-content-center`}
        >
          <img
            src={item.image}
            alt={item.name}
            className={`${styles.img} img-fluid`}
          />
          <div className="content" style={{ padding: '10px' }}>
            <div className="fs-4 fw-bold mb-4">{item.name}</div>
            <div className="">
              <div className="fs-6">Last location</div>
              <div className="fs-5">{item.location.name}</div>
            </div>
          </div>
        </div>
        {(() => {
          if (item.status === 'Dead') {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-danger`}
              >
                {item.status}
              </div>
            );
          } else if (item.status === 'Alive') {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-success`}
              >
                {item.status}
              </div>
            );
          } else {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-secondary`}
              >
                {item.status}
              </div>
            );
          }
        })()}
      </Link>
    ));
  } else {
    display = 'No characters found!';
  }

  return <>{display}</>;
};

export default Cards;
