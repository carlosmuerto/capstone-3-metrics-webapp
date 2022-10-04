import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const state = useSelector((state) => state);

  const detailsTitles = [
    'Previous Close',
    'Day High',
    'Day Low',
    '52 Week High',
    '52 Week Low',
    'Exchange',
  ];

  const detailsData = [
    state.stockDetails.previousClose,
    state.stockDetails.dayHigh,
    state.stockDetails.dayLow,
    state.stockDetails.yearHigh,
    state.stockDetails.yearLow,
    state.stockDetails.exchange,
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
    <div key={state.stockDetails.symbol} className="details-container">
      <div className="details-main">
        <div className="details-symbol">{state.stockDetails.symbol}</div>
        <div className="details-price">
          {state.stockDetails.price.toFixed(2)}
          {(state.stockDetails.change > 0)
            ? <span className="details-change-positive">{` +${state.stockDetails.change.toFixed(2)}`}</span>
            : <span className="details-change-negative">{` ${state.stockDetails.change.toFixed(2)}`}</span>}
        </div>
      </div>
      <div className="details-sub">
        <p className="details-sub-title">{state.stockDetails.name}: </p>
      </div>
    </div>
  );

  return (
    <div className="details-container">
      {showDetails}
      <div className="details-info">
        {details}
      </div>
    </div>
  );
};

export default Details;
