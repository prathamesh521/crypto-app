import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CoinsListing from "./components/CoinsListing";

function App() {
  const [coins, setCoins] = useState([]);

  return (
    <div className="coin-app">
      <Navbar setCoins={setCoins}/>
      <CoinsListing setCoins={setCoins} coins={coins}/>
    </div>
  );
}

export default App;
