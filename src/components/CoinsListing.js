import React, { useEffect, useState } from "react";

import axios from "axios";
import CryptoDetails from "./CryptoDetails";

const CoinsListing = ({ setCoins, coins }) => {

    useEffect(() => {
      axios
        .get("https://api.coingecko.com/api/v3/search/trending")
        .then((res) => {
          setCoins(res.data.coins);
          // console.log(res.data.coins);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <section className="coins-listing my-5">
        
        <div className="container">
      <div className="row">
      {coins.map((coin) => {
        return (
          <CryptoDetails
            key={(coin.item && coin.item.id) ? coin.item.id : coin.id}
            name={(coin.item && coin.item.name) ? coin.item.name : coin.name}
            image={(coin.item && coin.item.large) ? coin.item.large : coin.large}
            symbol={(coin.item && coin.item.symbol) ? coin.item.symbol : coin.symbol}
            marketcap={(coin.item && coin.item.data && coin.item.data.market_cap) ? coin.item.data.market_cap : null} // Check if coin.item and its properties exist before accessing them
            marketcaprank={(coin.item && coin.item.market_cap_rank) ? coin.item.market_cap_rank : null} // Check if coin.item exists before accessing its properties
            price={(coin.item && coin.item.price_btc) ? coin.item.price_btc : null} // Check if coin.item exists before accessing its properties
            pricechange={(coin.item && coin.item.data && coin.item.data.price_change_percentage_24h) ? coin.item.data.price_change_percentage_24h : null} // Check if coin.item and its properties exist before accessing them
            volume={(coin.item && coin.item.data && coin.item.data.total_volume) ? coin.item.data.total_volume : null} // Check if coin.item and its properties exist before accessing them
          />
        );
      })}
      </div>
      </div>
        
        </section>
  )
}

export default CoinsListing