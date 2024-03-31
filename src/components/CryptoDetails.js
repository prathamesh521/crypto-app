import React from "react";
import "../Styles.css";

const CryptoDetails = ({
  image,
  name,
  price,
  volume,
  pricechange,
  marketcap,
  marketcaprank,
}) => {
  // console.log('Name: '. image);
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto1" />
          <h1>{name}</h1>
          <p className="coin-symbol"></p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}</p>

          {volume && <p className="coin-volume">{volume.toLocaleString()}</p>}

          {/* {pricechange<0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                    )
                } */}

{marketcap && <p className="coin-volume">Mkt Cap: {marketcap.toLocaleString()}</p>}
{marketcaprank && <p className="coin-volume">Mkt Cap Rank: {marketcaprank.toLocaleString()}</p>}
          {/* <p className="coin-marketcap">
            Mkt Cap: {marketcap.toLocaleString()}
          </p> */}
          {/* <p className="coin-marketcap">
            Mkt Cap rank: {marketcaprank.toLocaleString()}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
