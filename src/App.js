import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WalletStandardAdapterProvider } from '@mysten/wallet-adapter-wallet-standard'
import { WalletProvider } from '@mysten/wallet-adapter-react'
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js'
import "@fontsource/ibm-plex-sans";
import './App.css';
import './css/tailwind.output.css';
import './css/fontawesome-free-6.0.0-beta3-web/css/fontawesome.css';
import 'react-notifications/lib/notifications.css';

import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';

import { StoreContext } from './store';

const supportedWallets = [new WalletStandardAdapterProvider()]
const provider = new JsonRpcProvider(devnetConnection);

function App() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [account, setAccount] = React.useState(null);
  const [wallet, setWallet] = React.useState('');
  const [marketToken, setMarketToken] = React.useState("S");
  const [marketTokenPrice, setMarketTokenPrice] = React.useState(undefined);
  const [newCoins, setNewCoins] = React.useState(undefined);
  const [coinBalances, setCoinBalances] = React.useState(undefined);
  const [isAlterSecondToken, setIsAlterSecondToken] = React.useState("SUI");
  const [traderData, setTraderData] = React.useState([]);

  const [event, setEvent] = React.useState(0);

  const storeValue = {
    account, setAccount,
    modalIsOpen, setModalIsOpen,
    newCoins, setNewCoins,
    coinBalances, setCoinBalances,
    provider,
    wallet, setWallet,
    isAlterSecondToken, setIsAlterSecondToken,
    marketToken, setMarketToken,
    traderData, setTraderData,
    marketTokenPrice, setMarketTokenPrice,
    event, setEvent,
  }

  return (
    <WalletProvider adapters={supportedWallets}>
      <StoreContext.Provider value= {storeValue}>
          <React.Fragment>  
          <Header />
            <Routes>    
              <Route path="/" element={<Home />} />             
            </Routes>
            
            <ToastContainer
              className='custom-toast'
              autoClose={3000}
              closeButton={false}
              closeOnClick
              theme='light'
              position='bottom-right'
            />             
          </React.Fragment>  
      </StoreContext.Provider>
    </WalletProvider>
  );
}

export default App;
