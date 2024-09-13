import React, { useState, useEffect, useContext } from 'react';
import './index.css';

import { useMediaQuery } from 'react-responsive';
import { FaAngleDown } from 'react-icons/fa';
import ExchangeLogo from '../../img/logo/exchange.png';

const Home = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });  
    
    return (
        <div className='pb-5 d-flex content-position'>
            <div className='text-white migration-box m-auto'>
                <div className='my-2'><p className='text-white text-center font-bold title'>Migrate</p></div>
                <div className='trade-token-select mb-2'>
                    <div className='d-flex justify-content-between'>
                        <h5 className='text-gray text-left fs-12'>Sell </h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <input type='text' className='token-select-input' placeholder='0.0' />
                        <div className='d-flex cursor-pointer token-select' ><h5></h5><FaAngleDown className='fs-26 mt-1' /></div>
                    </div>                    
                    <h5 className='text-gray-light text-left fs-12'>Balance:</h5>
                </div>
                <div className='ex-logo-part'><img src={ExchangeLogo} width={45} className='exchange-logo' /></div>
                <div className='trade-token-select mt-2'>
                    <div className='d-flex justify-content-between'><h5 className='fs-12 text-gray text-left'>Buy</h5></div>
                    <div className='d-flex justify-content-between'>
                        <input type='text' className='token-select-input text-gray' placeholder='0.0'/>
                        <div className='d-flex cursor-pointer token-select' ><h5></h5><FaAngleDown className='fs-26 mt-1' /></div>
                    </div>
                    <h5 className='text-gray-light fs-12 text-left'>Leverage:x</h5>
                </div>
                
                <div className='earn-button w-100 text-center'>Connect wallet</div>
            </div>
        </div>
    )
}

export default Home;