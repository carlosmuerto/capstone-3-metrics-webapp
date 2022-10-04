import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const state = useSelector((state) => state.detailsReducer.details[0]);

  const detailsTitles = [
    'Previous Close',
    'Day High',
    'Day Low',
    '52 Week High',
    '52 Week Low',
    'Exchange',
  ];

  const detailsData = [
    state.previousClose,
    state.dayHigh,
    state.dayLow,
    state.yearHigh,
    state.yearLow,
    state.exchange,
  ];

  const size = detailsData.length;

  const details = [];

  for (let i = 0; i < size; i += 1) {
    details.push(
      <div className="details" key={detailsTitles[i]}>
        <div className="details-title">{detailsTitles[i]}</div>
        {
          (typeof detailsData[i] === 'number')
            ? <div className="details-data">{detailsData[i].toFixed(2)}</div>
            : <div className="details-data">{detailsData[i]}</div>
        }
      </div>,
    );
  }

  const showDetails = (
    <div key={state.symbol} className="details-container">
      <div className="details-main">
        <div className="details-symbol">{state.symbol}</div>
        <div className="details-price">
          {state.price.toFixed(2)}
          {(state.change > 0)
            ? (
              <span className="details-change-positive">
                {' '}
                +
                {state.change.toFixed(2)}
              </span>
            )
            : (
              <span className="details-change-negative">
                {' '}
                {state.change.toFixed(2)}
              </span>
            )}
        </div>
      </div>
      <div className="details-sub">
        <p className="details-sub-title">
          {state.name}
          :
          {' '}
        </p>
      </div>
    </div>
  );

  return (
    <div className="details-wrapper">
      {showDetails}
      {details}
    </div>
  );
};

export default Details;
